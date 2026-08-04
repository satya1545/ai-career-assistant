import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser({
                email,
                password,
            });

            login(data.access_token);

            navigate("/dashboard");
        } catch (error) {

    console.log(error);
    console.log(error.response);
    console.log(error.response?.data);

    alert(
        JSON.stringify(error.response?.data)
    );

}
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

                <h1 className="text-3xl font-bold text-center text-blue-600">
                    AI Career Assistant
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    AI Powered Resume Analyzer
                </p>

                <form
                    onSubmit={handleLogin}
                    className="mt-8 space-y-5"
                >

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Login;