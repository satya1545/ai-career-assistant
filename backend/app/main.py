from fastapi import FastAPI

from app.database.database import Base, engine

# Import models (creates tables)
from app.models.user import User
from app.models import resume as resume_model

# Import routers
from app.routers.user import router as user_router
from app.api.resume import router as resume_router

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