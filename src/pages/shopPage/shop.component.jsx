import React, { Component } from 'react'
import SHOP_DATA from './shop_Data'
import '../shopPage/shop.style.scss'
import CollectionPreview from '../../components/collection-preview/collection.preview'




class shopPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const { collection } = this.state;
        return (
            <div className='shop-page'>
                {
                    collection.map(({id , ...othercollectionProps} ) =>(
                    <CollectionPreview key={id} {...othercollectionProps} />
                    ))
                }
            </div>
        )
    }
}
export default shopPage;