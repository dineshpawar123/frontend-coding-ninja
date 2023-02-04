import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchProductData } from '../redux'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { addProductToCart } from '../redux/productFromCart/productCartAction';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { withRouter } from "react-router-dom";
import {
    Typography,
} from "@material-ui/core";
import { setAutherisationStatus } from '../redux/authentication/authenticationAction';
import { useParams } from 'react-router-dom'; // <-- import useParams hook
import {useSelector, useDispatch} from 'react-redux'



// function productData() {
//   return (
//     <div>productData</div>
//   )
// }

// export default productData

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '10px'
}));

export default function ProductDataContainer() {

    // productData: state.productData,
    // productCartCount: state.productCartData.cartProductCount,
    // authentication: state.authentication.isAutherise

    const productData = useSelector(state => state.productData)
    const productCartCount = useSelector(state => state.productCartData.cartProductCount)
    const authentication = useSelector(state => state.authentication.isAutherise)

    // authentication: state.authentication.isAutherise
  
    const dispatch = useDispatch()

    
    // const { productData, productCartCount, fetchProductData, addProductToCart } = props;
    useEffect(() => {
        dispatch(fetchProductData())
    })


    useEffect(() => {
        if (!authentication) {
            // props.history.push("/")
        }
    }, [])

    return (
        <Typography>
            <Typography style={{ display: 'flex', flexDirection: 'row-reverse', backgroundColor: 'red', height: '25px', padding: '20px 10px' }} >
                <Typography variant="h6" style={{ color: 'white', marginRight: '20px', transform: 'scale(2)' }} onClick={() => {
                    // props.history.push("/")
                    dispatch(setAutherisationStatus(false))
                }} >
                    <ExitToAppIcon />
                </Typography>
                <Typography variant="h6" style={{ color: 'white', marginRight: '70px', transform: 'scale(2)' }} onClick={() => 
                console.log("")
                    // props.history.push("/cartProduct")
                    }>
                    <ShoppingCartIcon />
                    <span style={{ backgroundColor: 'blue', borderRadius: '50%', padding: '2px', transform: 'scale(1)', color: 'white', fontSize: '10px', position: 'relative', bottom: '15px', left: '-5px' }}>{productCartCount}</span>
                </Typography>
            </Typography>

            {
                productData.loading ? <Box sx={{ display: 'flex', marginLeft: '45%', marginTop: '20%' }}>
                    <CircularProgress />
                </Box> : productData.error ? <div style={{ marginLeft: '45%', marginTop: '20%' }}>Api Response Error</div> :
                    <Grid container spacing={2} style={{ marginTop: '40px' }}>
                        {productData.productData && productData.productData.map((data, index) => {
                            return <Grid item xs={6} md={6}>
                                <Item key={data.id}>
                                    <div><img src={data.image} height="170px" width="30%" /></div>
                                    <h3 style={{ color: 'red' }}>{data.title}</h3>
                                    <h5>{data.description}</h5>
                                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <h3 style={{ color: 'black' }}>₹ {data.price}</h3>
                                        <AddCircleIcon style={{ color: 'green', width: '120px', marginTop: '15px', }} onClick={() => {
                                            dispatch(addProductToCart(data.id));
                                            console.log(data.id)
                                        }} />
                                    </div>
                                </Item>
                            </Grid>
                        })}
                    </Grid>
            }
        </Typography >
    )
}

// const mapStateToProps = state => {
//     return {
//         productData: state.productData,
//         productCartCount: state.productCartData.cartProductCount,
//         authentication: state.authentication.isAutherise
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchProductData: () => dispatch(fetchProductData()),
//         setAutherisationStatus: (id) => dispatch(setAutherisationStatus(id)),
//         addProductToCart: (id) => dispatch(addProductToCart(id))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDataContainer))