from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from sqlalchemy.orm import Session
import os
import shutil
import json

from app.database.database import get_db
from app.models.resume import Resume
from app.models.user import User
from app.core.oauth2 import get_current_user
from app.services.pdf_service import extract_text_from_pdf
from app.services.ai_service import analyze_resume

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
def upload_resume(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    # Validate PDF
    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    # Save uploaded file
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text from PDF
    extracted_text = extract_text_from_pdf(file_path)

    # Analyze resume using Gemini
    try:
        analysis = analyze_resume(extracted_text)
    except Exception as e:
        analysis = {
            "ats_score": None,
            "strengths": [],
            "weaknesses": [],
            "missing_skills": [],
            "suggestions": [],
            "error": str(e)
        }

    # Create Resume object
    new_resume = Resume(
        filename=file.filename,
        filepath=file_path,
        user_id=current_user.id,
        ats_score=analysis.get("ats_score"),
        strengths=json.dumps(analysis.get("strengths", [])),
        weaknesses=json.dumps(analysis.get("weaknesses", [])),
        missing_skills=json.dumps(analysis.get("missing_skills", [])),
        suggestions=json.dumps(analysis.get("suggestions", []))
    )

    # Save to database
    db.add(new_resume)
    db.commit()
    db.refresh(new_resume)

    return {
        "message": "Resume uploaded successfully.",
        "resume_id": new_resume.id,
        "filename": new_resume.filename,
        "analysis": analysis
    }