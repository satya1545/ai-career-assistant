from fastapi import FastAPI

from app.database.database import Base, engine
from app.models.user import User

from app.routers.user import router as user_router

app = FastAPI(
    title="AI Career Assistant API"
)

Base.metadata.create_all(bind=engine)

app.include_router(user_router)

@app.get("/")
def home():
    return {
        "message": "AI Career Assistant API Running 🚀"
    }