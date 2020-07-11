import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection-page';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectonsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component{

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){

        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');

        fetch(
            'https://firestore.googleapis.com/v1/projects/boutique-clothing/databases/(default)/documents/collections'
        )
        .then(response => response.json())
        .then(collections => console.log(collections));

        collectionRef.get().then( async snapShot =>{ 
           const collectionMap = convertCollectonsSnapshotToMap(snapShot);
           
            updateCollections(collectionMap);
            console.log(collectionMap);
            this.setState({loading: false});
        });
    }

    componentWillUnmount(){
        //this.unsubscribeFromSnapshot();
    }

    render(){
        const { match } = this.props;
        const {loading} = this.state;

        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                   // component={CollectionOverview}
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
                />
                <Route
                    path={`${match.path}/:collectionId`} 
                    // component={CollectionPage}
                    render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} />}
                />
            </div>
        )
    }
}

const mapDispatchToPops = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})


export default connect(null, mapDispatchToPops)(ShopPage);