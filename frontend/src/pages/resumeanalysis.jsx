import { useLocation, useNavigate } from "react-router-dom";

function ResumeAnalysis() {

    const location = useLocation();
    const navigate = useNavigate();

    const analysis = location.state?.analysis;

    if (!analysis) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-xl rounded-xl p-10 text-center">
                    <h1 className="text-3xl font-bold mb-6">
                        No Analysis Found
                    </h1>

                    <button
                        onClick={() => navigate("/upload")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                    >
                        Upload Resume
                    </button>
                </div>
            </div>
        );
    }

    return (

        <div className="min-h-screen bg-slate-100 py-10">

            <div className="max-w-6xl mx-auto">

                <div className="bg-white rounded-2xl shadow-xl p-10">

                    <div className="flex justify-between items-center">

                        <h1 className="text-4xl font-bold text-blue-600">
                            Resume Analysis
                        </h1>

                        <button
                            onClick={() => navigate("/dashboard")}
                            className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-black"
                        >
                            Dashboard
                        </button>

                    </div>

                    <div className="mt-12 text-center">

                        <p className="text-gray-500 text-lg">
                            ATS SCORE
                        </p>

                        <div className="mt-4 w-44 h-44 rounded-full bg-green-500 text-white mx-auto flex items-center justify-center text-6xl font-bold shadow-lg">

                            {analysis.ats_score}

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-14">

                        <div className="bg-green-50 rounded-xl p-6 shadow">

                            <h2 className="text-2xl font-bold text-green-700 mb-4">
                                ✅ Strengths
                            </h2>

                            <ul className="space-y-3">

                                {analysis.strengths.map((item, index) => (

                                    <li
                                        key={index}
                                        className="bg-white rounded-lg p-3"
                                    >
                                        {item}
                                    </li>

                                ))}

                            </ul>

                        </div>

                        <div className="bg-red-50 rounded-xl p-6 shadow">

                            <h2 className="text-2xl font-bold text-red-700 mb-4">
                                ❌ Weaknesses
                            </h2>

                            <ul className="space-y-3">

                                {analysis.weaknesses.map((item, index) => (

                                    <li
                                        key={index}
                                        className="bg-white rounded-lg p-3"
                                    >
                                        {item}
                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-10">

                        <div className="bg-orange-50 rounded-xl p-6 shadow">

                            <h2 className="text-2xl font-bold text-orange-700 mb-4">
                                📚 Missing Skills
                            </h2>

                            <ul className="space-y-3">

                                {analysis.missing_skills.map((item, index) => (

                                    <li
                                        key={index}
                                        className="bg-white rounded-lg p-3"
                                    >
                                        {item}
                                    </li>

                                ))}

                            </ul>

                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 shadow">

                            <h2 className="text-2xl font-bold text-blue-700 mb-4">
                                💡 Suggestions
                            </h2>

                            <ul className="space-y-3">

                                {analysis.suggestions.map((item, index) => (

                                    <li
                                        key={index}
                                        className="bg-white rounded-lg p-3"
                                    >
                                        {item}
                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                    <button
                        onClick={() => navigate("/upload")}
                        className="mt-12 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold"
                    >
                        Analyze Another Resume
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ResumeAnalysis;