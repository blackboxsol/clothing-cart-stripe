import ShopActionTypes from './shop.types';

const INTIAL_STATE = {
    collections: null
}

const shopReducer = (state = INTIAL_STATE, action) =>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                collections: action.payload,
                state
            }
        default:
            return state;
    }
}

export default shopReducer;