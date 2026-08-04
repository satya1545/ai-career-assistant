import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await registerUser(formData);

            alert("Registration Successful!");

            navigate("/");
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.detail ||
                "Registration Failed"
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-blue-600">
                    Create Account
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Join AI Career Assistant
                </p>

                <form
                    onSubmit={handleRegister}
                    className="space-y-5 mt-8"
                >

                    <div>
                        <label className="block mb-2 font-medium">
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Register;