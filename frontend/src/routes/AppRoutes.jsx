import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import UploadResume from "../pages/UploadResume";
import ResumeAnalysis from "../pages/ResumeAnalysis";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Routes */}

                <Route path="/" element={<Login />} />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Protected Routes */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/upload"
                    element={
                        <ProtectedRoute>
                            <UploadResume />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/analysis"
                    element={
                        <ProtectedRoute>
                            <ResumeAnalysis />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;