import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

// import CollectionOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection-page';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection-page.container';


// import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionFetching , selectIsCollectionLoaded} from '../../redux/shop/shop.selector'
import { fetchCollectionsStart, fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component{

    componentDidMount(){
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    componentWillUnmount(){
        //this.unsubscribeFromSnapshot();
    }

    render(){
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                   component={CollectionOverviewContainer}
                    // render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
                />
                <Route
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}
                    // render={ props => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToPops = dispatch => ({
    fetchCollectionsStart: collections => dispatch(fetchCollectionsStart(collections))
})


export default connect(mapStateToProps, mapDispatchToPops)(ShopPage);