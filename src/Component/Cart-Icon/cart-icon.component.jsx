import './cart-icon.styles.scss'
import { ReactComponent as ShoppingCard } from "./shopping-bag.svg";

const CartIcon = () => {
    return(
        <div className='cart-icon-container'>
            <ShoppingCard className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;