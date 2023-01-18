import React from 'react';
import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../pages";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Navigate to="/login" />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
                
            </Routes>
        </BrowserRouter>
    )
} 