import axios from "axios";

const api = axios.create({
   baseURL: "https://ai-career-assistant-yipw.onrender.com"
});

export default api;