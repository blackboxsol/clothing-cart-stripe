import React from 'react';
import { connect } from 'react-redux';

import './collection-page.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection}) =>{ 
    const { title, items } = collection;
    return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
        {
            items.map(item=> <CollectionItem item={item} key={item.id}/>)
        }
        </div>
    </div>
)};

const mapStateToParams = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToParams)(CollectionPage);