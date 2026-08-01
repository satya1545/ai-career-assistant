import api from "../api/api";

export const loginUser = async (formData) => {

    const response = await api.post(

        "/users/login",

        formData,

        {

            headers: {

                "Content-Type":
                    "application/x-www-form-urlencoded"

            }

        }

    );

    return response.data;

};