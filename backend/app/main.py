from fastapi import FastAPI

from app.database.database import Base, engine
from app.models.user import User


app = FastAPI(
    title="AI Career Assistant API"
)

Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {
        "message": "AI Career Assistant API Running 🚀"
    }