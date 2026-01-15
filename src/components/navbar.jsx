import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-light border-bottom py-4"
      // style={{ backgroundColor: "#F0F2F5" }}
    >
      <div className="container">
        <span className="navbar-brand fw-bold fs-2">S K Arts</span>

        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/paintings">
                Paintings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/exhibitions">
                Exhibitions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/available">
                Available Artworks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
