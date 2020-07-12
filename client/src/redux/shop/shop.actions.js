import ShopActionTypes from './shop.types';
import {firestore, convertCollectonsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get()
        .then( async snapShot =>{ 
           const collectionMap = convertCollectonsSnapshotToMap(snapShot);
           dispatch(fetchCollectionsSuccess(collectionMap));
        })
        .catch(error => dispatch(fetchCollectionFailure(error)));
    }
}