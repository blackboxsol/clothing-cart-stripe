import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// import { fetchCollectionsStart } from './shop/shop.sagas';
 
const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware]; //thunk is replaced by saga

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga) //we need to pass individual sagas

export const persistor = persistStore(store);


export default {store, persistor};

