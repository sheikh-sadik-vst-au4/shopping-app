import React from "react";

const Navbar = ({cartItemNumber}) => {
  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Shopping</span>
        <span className="navbar-brand mb-0 h1 mr-auto">
          <button type="button" className="btn btn-primary">
            Cart-Item <span className="badge badge-light">{cartItemNumber}</span>
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
