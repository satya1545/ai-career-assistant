from fastapi import FastAPI

app = FastAPI(
    title="AI Career Assistant API",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to AI Career Assistant 🚀"
    }