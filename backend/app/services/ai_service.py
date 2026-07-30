import json
from google import genai
from app.config.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)


def analyze_resume(resume_text: str):

    prompt = f"""
You are an ATS Resume Analyzer.

Return ONLY valid JSON.

Do NOT return markdown.
Do NOT use ```json.
Do NOT add explanations.

Return exactly this format:

{{
  "ats_score": 0,
  "strengths": [],
  "weaknesses": [],
  "missing_skills": [],
  "suggestions": []
}}

Resume:

{resume_text}
"""

    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=prompt,
    )

    return json.loads(response.text)