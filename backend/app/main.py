from fastapi import FastAPI

from app.database.database import Base, engine
from fastapi.middleware.cors import CORSMiddleware
# Import models (creates tables)
from app.models.user import User
from app.models import resume as resume_model

# Import routers
from app.routers.user import router as user_router
from app.api.resume import router as resume_router
from fastapi import HTTPException 
from app.core.exception_handler import (
    http_exception_handler,
    global_exception_handler
)

app = FastAPI(
    title="AI Career Assistant API"
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Register routers
app.include_router(user_router)
app.include_router(resume_router)


@app.get("/")
def home():
    return {
        "message": "AI Career Assistant API Running 🚀"
    }
app.add_exception_handler(
    HTTPException,
    http_exception_handler
)

app.add_exception_handler(
    Exception,
    global_exception_handler
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ai-career-assistant-frontend-mu.vercel.app",
        "https://ai-career-assistant-frontend-git-main-satya1545s-projects.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)