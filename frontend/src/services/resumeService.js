import api from "../api/api";

export const uploadResume = async (file) => {

    const token = localStorage.getItem("access_token");

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/resume/upload",
        formData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};