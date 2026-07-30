from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.database.database import Base
from sqlalchemy import Column, Integer, Text

class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, index=True)

    filename = Column(String, nullable=False)
    filepath = Column(String, nullable=False)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    user = relationship(
    "User",
    back_populates="resumes"
)
    ats_score = Column(Integer)

    strengths = Column(Text)

    weaknesses = Column(Text)

    missing_skills = Column(Text)

    suggestions = Column(Text)