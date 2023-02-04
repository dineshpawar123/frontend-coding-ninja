import axios from 'axios';

import {
    FETCH_PRODUCTDATA_REQUEST,
    FETCH_PRODUCTDATA_SUCCESS,
    FETCH_PRODUCTDATA_FAILURE
}
    from './productDataType';

export const fetchProductDataRequest = () => {
    return {
        type: FETCH_PRODUCTDATA_REQUEST
    }
}

export const fetchProductDataSuccess = users => {
    return {
        type: FETCH_PRODUCTDATA_SUCCESS,
        payload: users
    }
}

export const fetchProductDataFailure = error => {
    return {
        type: FETCH_PRODUCTDATA_FAILURE,
        payload: error
    }
}

export const fetchProductData = () => {
    return (dispatch) => {
        dispatch(fetchProductDataRequest)
        axios.get('https://fakestoreapi.com/products').then(
            response => {
                const productData = response.data
                dispatch(fetchProductDataSuccess(productData))
            }).catch(error => {
                // dispatch(fetchProductDataSuccess(jsondata))
                const errorMsg = error.message;
                dispatch(fetchProductDataFailure(errorMsg))
            })
    }
}