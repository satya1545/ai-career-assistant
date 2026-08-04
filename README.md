<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f6ee7a98-83f4-4ec4-89e0-8cc51b6e445c" /># 🚀 AI Career Assistant

An AI-powered web application that analyzes resumes, provides ATS scores, identifies missing skills, and suggests improvements using Google's Gemini AI.

---

## 🌐 Live Demo

**Application link:https://ai-career-assistant-frontend-git-main-satya1545s-projects.vercel.app

**Backend API:https://ai-career-assistant-yipw.onrender.com

---

# 📸 Screenshots

> <img width="1920" height="1080" alt="Screenshot 2026-08-04 205426" src="https://github.com/user-attachments/assets/daab7a48-fe85-479e-971b-b3195885ba1a" />
<img width="1920" height="1080" alt="Screenshot 2026-08-04 205359" src="https://github.com/user-attachments/assets/aa1f23e1-1bc6-4a9b-982e-f9960d2f7abe" />
<img width="1920" height="1080" alt="Screenshot 2026-08-04 204616" src="https://github.com/user-attachments/assets/55e11acf-6b73-4c3d-89aa-e2b014518099" />


- Login Page
- Register Page
- Dashboard
- Resume Upload
- Resume Analysis

---

# ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 📄 Resume Upload (PDF)
- 🤖 AI Resume Analysis using Gemini AI
- 📊 ATS Score Generation
- ✅ Resume Strengths
- ❌ Resume Weaknesses
- 📚 Missing Skills Detection
- 💡 Personalized Improvement Suggestions
- 🔒 Protected Routes
- 📱 Responsive UI
- ☁️ Deployed on Vercel & Render

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- JWT Authentication
- Python

## AI

- Google Gemini API

## Deployment

- Vercel (Frontend)
- Render (Backend)
- Render PostgreSQL

---

# 📂 Project Structure

```
AI-Career-Assistant
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── app
│   ├── uploads
│   ├── requirements.txt
│   └── main.py
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-career-assistant.git

cd ai-career-assistant
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

source venv/bin/activate
```

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
DATABASE_URL=your_database_url

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=30

GOOGLE_API_KEY=your_gemini_api_key
```

Run Backend

```bash
uvicorn app.main:app --reload
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Backend

```env
DATABASE_URL=

SECRET_KEY=

ALGORITHM=

ACCESS_TOKEN_EXPIRE_MINUTES=

GOOGLE_API_KEY=
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /users/register | Register User |
| POST | /users/login | Login User |
| GET | /users/me | Current User |

---

## Resume

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /resume/upload | Upload Resume |
| GET | / | API Health Check |

---

# 🧠 AI Analysis

The application analyzes uploaded resumes and provides:

- ATS Score
- Strengths
- Weaknesses
- Missing Skills
- Personalized Suggestions

---

# 🚀 Deployment

## Frontend

- Vercel

## Backend

- Render

## Database

- Render PostgreSQL

---

# 📈 Future Improvements

- Resume History
- Multiple Resume Management
- Resume Download
- AI Career Roadmap
- Job Recommendation Engine
- Cover Letter Generator
- Interview Question Generator
- Admin Dashboard
- Dark Mode

---

# 👨‍💻 Author

**Satyanarayana Pasupunuri**

GitHub:
https://github.com/satya1545

LinkedIn:
www.linkedin.com/in/satyanarayanapasupunuri

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

---

# 📜 License

This project is licensed under the MIT License.
