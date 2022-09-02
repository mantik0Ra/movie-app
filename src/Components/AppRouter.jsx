import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Details from "../Pages/Details";
import All from "../Pages/All";
import Main from "../Pages/Main";

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/main" element={<Main/>}/>
        <Route path="/*" element={<Navigate to="/main" replace />} />
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/all" element={<All/>}/>
        
    </Routes>
  )
}
