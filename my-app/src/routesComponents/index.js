import ProductData from '../components/productData'
import LoginPage from '../components/loginPage'
import CartProduct from '../components/cartProduct'
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from 'react-router-dom';


export const RoutesComponents =()=> <Routes>
    <Route exact path="/" element={<LoginPage/>}></Route>
    <Route path="/product" element={<ProductData/>}></Route>
    <Route path="/cartProduct" element={<CartProduct/>}></Route>
  </Routes>