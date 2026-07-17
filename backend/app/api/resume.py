from fastapi import APIRouter, UploadFile, File, HTTPException, status

from app.schemas.resume import ResumeUploadResponse

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)


@router.post(
    "/upload",
    response_model=ResumeUploadResponse
)
async def upload_resume(
    file: UploadFile = File(...)
):
    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only PDF files are allowed."
        )

    return ResumeUploadResponse(
        filename=file.filename,
        message="Resume uploaded successfully."
    )