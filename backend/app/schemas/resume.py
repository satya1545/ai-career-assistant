from pydantic import BaseModel


class ResumeData(BaseModel):
    id: int
    filename: str
    ats_score: int | None
    strengths: list[str]
    weaknesses: list[str]
    missing_skills: list[str]
    suggestions: list[str]


class ResumeUploadResponse(BaseModel):
    message: str
    resume: ResumeData