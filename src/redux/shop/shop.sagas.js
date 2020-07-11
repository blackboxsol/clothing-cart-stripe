import { takeEvery, call, put, all } from 'redux-saga/effects';

import  ShopActionTypes  from './shop.types';
import { firestore, convertCollectonsSnapshotToMap} from  '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionFailure
} from './shop.actions';

export function* fetchCollectionsAsync(){
    yield console.log('I am fired');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(
            convertCollectonsSnapshotToMap,
            snapshot
        );
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
}


export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
};

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}