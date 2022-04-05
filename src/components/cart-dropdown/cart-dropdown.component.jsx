import '../cart-dropdown/cart-dropdown.style.scss'
import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-item' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;