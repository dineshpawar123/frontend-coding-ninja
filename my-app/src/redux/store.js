import { configureStore } from '@reduxjs/toolkit'
import productData from './productData/productDataReducer'
import productCartData from './productFromCart/productCartReducer'
import authentication from './authentication/authenticationReducer';


export default configureStore({
    reducer: {
        productData: productData,
        productCartData: productCartData,
        authentication: authentication
    },
})