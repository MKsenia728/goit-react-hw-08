import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const getStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <dir className={css.container}>
      <NavLink className={getStyles} to="/register">
        Register
      </NavLink>
      <NavLink className={getStyles} to="/login">
        Log In
      </NavLink>
    </dir>
  );
};

export default AuthNav;
