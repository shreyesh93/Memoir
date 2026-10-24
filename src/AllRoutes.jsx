
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";

import ToDo from "./features/todo/ToDo";
import DailyJournal from "./features/dailyJournal/DailyJournal";
import EatnSplit from "./features/eat-n-split/pages/EatnSplit";
import PackingListMain from "./features/packingList/pages/PackingListMain";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root route redirects to Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Main layout with Navbar and Outlet */}
        <Route path="/home" element={<Homepage />}>
          <Route index element={<Navigate to="todo" replace />} />

          <Route path="todo" element={<ToDo />} />
          <Route path="dailyJournal" element={<DailyJournal />} />
          <Route path="eatnSplit" element={<EatnSplit />} />
          <Route path="packingList" element={<PackingListMain />} />
        </Route>

        {/* Authentication pages without Navbar */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
