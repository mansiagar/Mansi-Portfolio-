import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left_side">
        {" "}
        <Logo />
      </div>
      <div className="right_side">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
