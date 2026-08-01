import os
import json

from fastapi import UploadFile, HTTPException
from sqlalchemy.orm import Session

from app.models.resume import Resume
from app.models.user import User
from app.services.ai_service import analyze_resume
from app.services.pdf_service import extract_text_from_pdf
from app.schemas.resume import ResumeUploadResponse, ResumeData

UPLOAD_DIR = "uploads"


def upload_resume_service(
    file: UploadFile,
    db: Session,
    current_user: User
):
    # Validate file
    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    # Create uploads folder
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    # Save file
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        buffer.write(file.file.read())

    # Extract text
    extracted_text = extract_text_from_pdf(file_path)

    # Analyze resume
    analysis = analyze_resume(extracted_text)

    # Save in database
    new_resume = Resume(
        filename=file.filename,
        filepath=file_path,
        user_id=current_user.id,
        ats_score=analysis.get("ats_score"),
        strengths=json.dumps(
            analysis.get("strengths", [])
        ),
        weaknesses=json.dumps(
            analysis.get("weaknesses", [])
        ),
        missing_skills=json.dumps(
            analysis.get("missing_skills", [])
        ),
        suggestions=json.dumps(
            analysis.get("suggestions", [])
        )
    )

    db.add(new_resume)
    db.commit()
    db.refresh(new_resume)

    return ResumeUploadResponse(
    message="Resume uploaded successfully",
    resume=ResumeData(
        id=new_resume.id,
        filename=new_resume.filename,
        ats_score=new_resume.ats_score,
        strengths=analysis.get("strengths", []),
        weaknesses=analysis.get("weaknesses", []),
        missing_skills=analysis.get("missing_skills", []),
        suggestions=analysis.get("suggestions", [])
    )
)