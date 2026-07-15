from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

print("STEP 1")

from app.config.config import settings

print("STEP 2")

engine = create_engine(settings.DATABASE_URL)

print("STEP 3")

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

print("STEP 4")

Base = declarative_base()

print("STEP 5")