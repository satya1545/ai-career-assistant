import api from "../api/api";

// Login
export const loginUser = async (credentials) => {

    const formData = new URLSearchParams();

    formData.append("username", credentials.email);
    formData.append("password", credentials.password);

    const response = await api.post(
        "/users/login",
        formData,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );

    return response.data;
};

// Register
export const registerUser = async (userData) => {

    const response = await api.post(
        "/users/register",
        userData
    );

    return response.data;
};