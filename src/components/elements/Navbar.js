import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        <div>
          <Link to="/contacts/todolist" className="btn btn-light ml-auto mr-2 border-0">
            Todo list
          </Link>
          <Link to="/contacts/add" className="btn btn-light ml-auto border-0">
            Create Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
