import {
    FETCH_PRODUCTDATA_REQUEST,
    FETCH_PRODUCTDATA_SUCCESS,
    FETCH_PRODUCTDATA_FAILURE
} from './productDataType'

const initialState = {
    loading: true,
    productData: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTDATA_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_PRODUCTDATA_SUCCESS:
            return {
                loading: false,
                productData: action.payload,
                error: ''
            }

        case FETCH_PRODUCTDATA_FAILURE:
            return {
                loading: false,
                productData: [],
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;