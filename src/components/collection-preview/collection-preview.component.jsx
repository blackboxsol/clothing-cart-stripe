import React from 'react';
import {withRouter} from 'react-router-dom';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items, history, routeName, match}) =>{
    return ( 
    <div className="collection-preview">
        <h1 className="title" onClick={()=>history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
        <div className="preview">
           {
               items.filter((item, id) => id < 4)
                    .map((item)=>(
                    <CollectionItem key={item.id} item={item}></CollectionItem>
               ))
           }
        </div>
    </div>
)}

export default withRouter(CollectionPreview);