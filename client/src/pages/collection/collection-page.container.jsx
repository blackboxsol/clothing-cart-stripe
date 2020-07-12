import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from './collection-page';
import WithSpinner  from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionLoaded } from  '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
