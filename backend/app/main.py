from fastapi import FastAPI

from app.database.database import Base, engine
from app.models.user import User

from app.routers.user import router as user_router
from app.api import resume

app = FastAPI(
    title="AI Career Assistant API"
)

Base.metadata.create_all(bind=engine)

app.include_router(user_router)
app.include_router(resume.router)

@app.get("/")
def home():
    return {
        "message": "AI Career Assistant API Running 🚀"
    }