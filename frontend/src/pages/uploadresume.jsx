import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadResume } from "../services/resumeService";

function UploadResume() {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleUpload = async () => {

        if (!file) {
            alert("Please select a PDF.");
            return;
        }

        try {

            setLoading(true);

            const data = await uploadResume(file);

            navigate("/analysis", {
                state: {
                    analysis: data.resume
                }
            });

        } catch (error) {

            console.log(error);

            alert("Upload Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-slate-100 flex justify-center items-center">

            <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-10">

                <h1 className="text-4xl font-bold text-blue-600 text-center">
                    Upload Resume
                </h1>

                <p className="text-center text-gray-500 mt-3">
                    Upload your resume and get an AI-powered ATS analysis.
                </p>

                <div className="mt-10 border-2 border-dashed border-blue-300 rounded-xl p-10 text-center">

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="w-full"
                    />

                    {file && (

                        <div className="mt-6">

                            <p className="font-semibold text-green-600">
                                Selected File
                            </p>

                            <p className="text-gray-700 mt-2">
                                {file.name}
                            </p>

                        </div>

                    )}

                </div>

                <button
                    onClick={handleUpload}
                    disabled={loading}
                    className="mt-8 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-xl text-lg font-semibold transition"
                >
                    {loading ? "Analyzing Resume..." : "Upload Resume"}
                </button>

                <button
                    onClick={() => navigate("/dashboard")}
                    className="mt-4 w-full border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-50"
                >
                    Back to Dashboard
                </button>

            </div>

        </div>

    );

}

export default UploadResume;