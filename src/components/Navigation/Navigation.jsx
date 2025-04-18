import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={getStyles} to="/">
        Home
      </NavLink>
      {isLoggenIn && (
        <NavLink className={getStyles} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
