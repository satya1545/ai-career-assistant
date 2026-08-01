import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authservice";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const formData = new URLSearchParams();

            formData.append("username", email);

            formData.append("password", password);

            const data = await loginUser(formData);

            localStorage.setItem(
                "access_token",
                data.access_token
            );

            alert("Login Successful!");

            navigate("/dashboard");

        } catch (error) {

            alert("Invalid Email or Password");

            console.log(error);

        }

    };

    return (

        <div>

            <h1>Login</h1>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>

        </div>

    );
}

export default Login;