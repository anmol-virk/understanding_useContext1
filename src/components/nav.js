import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#eee",
      }}
    >
      <div className="logo">Cart Manager</div>
      <div className="links">
        <Link className="btn btn-primary" to="/">
          Product Listing
        </Link>
        <Link className="btn btn-primary" to="/cart">
          Cart
        </Link>
        <Link className="btn btn-primary" to="/cartStatus">
          Status
        </Link>{" "}
      </div>
    </nav>
  );
}
