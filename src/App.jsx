import Navbar from "./components/navBar/Navbar";
import SideBar from "./components/sideBar/SideBar";
import Home from "./components/homepage/Home";
import Products from "./components/products/Products";
import AddProduct from "../pages/AddProduct";
import ProductDetailes from "./components/productDetailes/ProductDetails";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 sideBar">
          <SideBar />
        </div>
        <div className="col-10 main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Outlet />}>
              <Route path="" element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":id" element={<ProductDetailes />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
