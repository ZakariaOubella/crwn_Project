import Button from "../Button/Button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    return (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          <Button>Go To checkOut</Button>
        </div>
      </div>
    );
};

export default CartDropdown;
