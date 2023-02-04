import {
    ADDINGPRODUCTTOCART,
} from './productCartType';

export const addProductToCart = (payload) => {
    return {
        type: ADDINGPRODUCTTOCART,
        payload
    }
}