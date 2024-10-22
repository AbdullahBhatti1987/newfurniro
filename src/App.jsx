import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Auth from "./pages/Auth";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Products from "./adminsrc/admin/Products";
import Orders from "./adminsrc/admin/Orders";
import Users from "./adminsrc/admin/Users";
import Admin from "./adminsrc/admin/Admin";
import Settings from "./adminsrc/admin/Settings";
import AdminLogin from "./adminsrc/adminpages/AdminLogin";
import AdminPenal from "./adminsrc/admin/AdminPenal";
import AdminNavBar from "./adminsrc/admin/AdminNavBar";
import ProductList from "./adminsrc/AdminComponents/ProductList";
import AddProduct from "./adminsrc/AdminComponents/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
        <Route path="/adminpenal" element={<AdminPenal />}>
          <Route element={<AdminNavBar />}>
            <Route path="admin" element={<Admin />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
