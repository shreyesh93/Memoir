
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  function handleLogout() {
    // Keep your existing logout logic here.
    navigate("/login");
  }

  return (
    <div className="homepage">
      <header className="navbar">
        <h2>Memoir - Your own Personal Diary!</h2>
        <h3>Welcome Sarthak !</h3>
        <nav>
          <NavLink to="/home/todo">ToDo List</NavLink>
          <span>|</span>

          <NavLink to="/home/dailyJournal">Daily Journal</NavLink>
          <span>|</span>

          <NavLink to="/home/eatnSplit">Eat n Split</NavLink>
          <span>|</span>

          <NavLink to="/home/packingList">Packing List</NavLink>

          <button onClick={handleLogout}>
            Log out
          </button>
        </nav>
      </header>

      <main className="navbar-outlet">
        <Outlet />
      </main>
    </div>
  );
};

export default Homepage;
