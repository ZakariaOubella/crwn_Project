import { React, Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "./crown.svg";
import { UserContext } from "../../Context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

import CartIcon from "../../Component/Cart-Icon/cart-icon.component";
import CartDropdown from "../../Component/CardDropDown/cart-drop-down.component";
import { CartContext } from "../../Context/Cart.context";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}

          <Link className="nav-link">
            <CartIcon  />
          </Link>
        </div>
       {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
