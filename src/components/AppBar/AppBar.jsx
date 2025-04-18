import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      <Navigation />
      {isLoggenIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
