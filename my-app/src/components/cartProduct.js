
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchProductData } from '../redux'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { addProductToCart } from '../redux/productFromCart/productCartAction';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { withRouter } from "react-router-dom";
import {
    Typography,
} from "@material-ui/core";
import { setAutherisationStatus } from '../redux/authentication/authenticationAction';

// import React from 'react'

function cartProduct() {
  return (
    <div>cartProduct</div>
  )
}

export default cartProduct

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     margin: '10px'
// }));

// function CartProduct(props) {
//     const { productData, cartProducrIdList, addProductToCart } = props;

//     useEffect(() => {
//         if (!props.authentication) {
//             props.history.push("/")
//         }
//     }, [])

//     return (
//         <Typography>
//             <Typography style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'red', height: '25px', padding: '20px 10px' }} >
//                 <Typography style={{ color: 'white' }}> List of Selected products :</Typography>
//                 <Typography variant="h6" style={{ color: 'white', marginRight: '20px', transform: 'scale(2)' }} onClick={() => {
//                     props.setAutherisationStatus(false)
//                     props.history.push("/")
//                 }} >
//                     <ExitToAppIcon />
//                 </Typography>
//             </Typography>

//             {productData.loading ? <Box sx={{ display: 'flex', marginLeft: '45%', marginTop: '20%' }}>
//                 <CircularProgress />
//             </Box> : productData.error ? <div style={{ marginLeft: '45%', marginTop: '20%' }}>Api Response Error</div> :
//                 <Grid container spacing={2} style={{ marginTop: '40px' }}>
//                     {productData.productData && productData.productData.map((data, index) => {
//                         if (cartProducrIdList.includes(data.id)) {
//                             return <Grid item xs={6} md={6}>
//                                 <Item key={data.id}>
//                                     <div><img src={data.image} height="170px" width="30%" /></div>
//                                     <h3 style={{ color: 'red' }}>{data.title}</h3>
//                                     <h5>{data.description}</h5>
//                                     <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//                                         <h3 style={{ color: 'black' }}>₹ {data.price}</h3>
//                                         <AddCircleIcon style={{ color: 'green', width: '120px', marginTop: '15px', }} onClick={() => {
//                                             addProductToCart(data.id);
//                                             console.log(data.id)
//                                         }} />
//                                     </div>
//                                 </Item>
//                             </Grid>
//                         }
//                     })}
//                 </Grid>
//             }
//         </Typography >
//     )
// }

// const mapStateToProps = state => {
//     return {
//         productData: state.productData,
//         cartProducrIdList: state.productCartData.cartProducrIdList,
//         authentication: state.authentication.isAutherise
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchProductData: () => dispatch(fetchProductData()),
//         addProductToCart: (id) => dispatch(addProductToCart(id)),
//         setAutherisationStatus: (id) => dispatch(setAutherisationStatus(id)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartProduct))