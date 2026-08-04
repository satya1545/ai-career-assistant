import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {

    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    return (

        <div className="min-h-screen bg-gray-100">

            <nav className="bg-white shadow">

                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    <h1 className="text-3xl font-bold text-blue-600">
                        AI Career Assistant
                    </h1>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
                    >
                        Logout
                    </button>

                </div>

            </nav>

            <div className="max-w-6xl mx-auto px-6 py-12">

                <h2 className="text-4xl font-bold text-gray-800">
                    Welcome 👋
                </h2>

                <p className="text-gray-500 mt-2">
                    Upload your resume and receive an AI-powered ATS analysis.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

                    <div
                        onClick={() => navigate("/upload")}
                        className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="text-6xl">
                            📄
                        </div>

                        <h3 className="text-2xl font-bold mt-4">
                            Upload Resume
                        </h3>

                        <p className="text-gray-500 mt-3">
                            Upload a PDF resume and let AI evaluate your ATS score.
                        </p>

                    </div>

                    <div
                        onClick={() => navigate("/analysis")}
                        className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="text-6xl">
                            📊
                        </div>

                        <h3 className="text-2xl font-bold mt-4">
                            View Analysis
                        </h3>

                        <p className="text-gray-500 mt-3">
                            View the latest AI analysis and resume suggestions.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;