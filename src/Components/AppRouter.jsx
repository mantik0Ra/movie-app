import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Details from "../Pages/Details";
import Main from "../Pages/Main";

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/details" element={<Details/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/*" element={<Navigate to="/main" replace />} />
    </Routes>
  )
}
