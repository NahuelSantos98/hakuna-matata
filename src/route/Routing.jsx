import { Route, Routes } from 'react-router-dom';
import NavAndFooter from "../../src/layout/NavAndFooter";
import Home from "../../src/pages/home/Home";
import Product from "../../src/pages/product/Products";
import Order from "../../src/pages/orders/Orders";

const Routing = () => {
  return (
    <>
      <NavAndFooter>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      </NavAndFooter>
        
    </>
  );
};

export default Routing;
