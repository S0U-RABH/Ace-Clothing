import React from 'react'
import '../collection-item/collection-item.style.scss'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import CustomButton from '../custom-button/custom-button.component'
const CollectionItem = ({ items, addItem }) => {

    const { name, price, imageUrl } = items
    return (
        <div className='collection-item'>
            <div className='image'
                style={{ backgroundImage: `url(${imageUrl})` }} />

            <div className='collection-footer'>
                <span className='name' >{name}</span>
                <span className='price'>{price}</span>

            </div>
            <CustomButton onClick={() => addItem(items)} inverted >
                Add to cart
            </CustomButton>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);