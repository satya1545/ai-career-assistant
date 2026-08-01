from fastapi import APIRouter, UploadFile, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.user import User
from app.core.oauth2 import get_current_user
from app.services.resume_service import upload_resume_service
from app.schemas.resume import ResumeUploadResponse
router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

@router.post(
    "/upload",
    response_model=ResumeUploadResponse
)
def upload_resume(
    file: UploadFile,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return upload_resume_service(
        file=file,
        db=db,
        current_user=current_user
    )