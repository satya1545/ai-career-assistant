from google import genai
from app.config.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)


def analyze_resume(resume_text: str):
    prompt = f"""
You are an ATS Resume Analyzer.

Analyze the resume and provide:
1. ATS Score (0-100)
2. Strengths
3. Weaknesses
4. Missing Skills
5. Suggestions

Resume:
{resume_text}
"""

    try:
        response = client.models.generate_content(
            model="gemini-flash-latest",
            contents=prompt
        )
        return response.text

    except Exception as e:
        return f"Gemini Error: {str(e)}"