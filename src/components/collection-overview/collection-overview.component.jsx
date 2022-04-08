import React from 'react'
import '../collection-overview/collection-overview.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/collection.preview'
import { selectCollections } from '../../redux/shop/shop.selectors'


const CollectionOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...othercollectionProps }) => (
                    <CollectionPreview key={id} {...othercollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionOverview);