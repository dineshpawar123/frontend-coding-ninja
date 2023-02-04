import {
    ADDINGPRODUCTTOCART
} from './productCartType'

const initialState = {
    cartProductCount: 0,
    cartProducrIdList: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDINGPRODUCTTOCART:
            return {
                ...state,
                cartProducrIdList: [...state.cartProducrIdList, action.payload],
                cartProductCount: state.cartProducrIdList.length
            }
        default: return state;
    }
}

export default reducer;