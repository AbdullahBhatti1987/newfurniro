import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// User Pages
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

// Admin Pages
import AdminDashboard from "./adminsrc/adminpages/AdminDashboard";
import ProductList from "./adminsrc/adminpages/ProductList";
import ProductDetails from "./adminsrc/adminpages/ProductDetails";
import ProductGrid from "./adminsrc/adminpages/ProductGrid";
import ProductEdit from "./adminsrc/adminpages/ProductEdit";
import AddProduct from "./adminsrc/adminpages/AddProduct";
import CreateProduct from "./adminsrc/adminpages/CreateProduct";
import Orders from "./adminsrc/adminpages/Orders";
// import OrderView from "./adminsrc/adminpages/OrderView";
// import OrderManage from "./adminsrc/adminpages/OrderManage";
// import OrderReports from "./adminsrc/adminpages/OrderReports";
import UserView from "./adminsrc/adminpages/UserView";
import Users from "./adminsrc/adminpages/Users";
import UserManage from "./adminsrc/adminpages/UserManage";
import Settings from "./adminsrc/adminpages/Settings";
import SettingsGeneral from "./adminsrc/adminpages/SettingsGeneral";
import SettingsPayment from "./adminsrc/adminpages/SettingsPayment";
import SettingsShipping from "./adminsrc/adminpages/SettingsShipping";
import SettingsUserManagement from "./adminsrc/adminpages/SettingsUserManagement";
import Categories from "./adminsrc/adminpages/Categories";
import CategoryList from "./adminsrc/adminpages/CategoryList";
import CategoryEdit from "./adminsrc/adminpages/CategoryEdit";
import CategoryCreate from "./adminsrc/adminpages/CategoryCreate";
import Reviews from "./adminsrc/adminpages/Reviews";
import ReviewList from "./adminsrc/adminpages/ReviewList";
import ReviewManage from "./adminsrc/adminpages/ReviewManage";
import Analytics from "./adminsrc/adminpages/Analytics";
import AnalyticsSales from "./adminsrc/adminpages/AnalyticsSales";
import AnalyticsTraffic from "./adminsrc/adminpages/AnalyticsTraffic";
import AnalyticsPerformance from "./adminsrc/adminpages/AnalyticsPerformance";
import AdminLogin from "./adminsrc/AdminLogin";
import Products from "./adminsrc/adminpages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
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

        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="products" element={<Products />} />
          <Route path="products/productlist" element={<ProductList />} />
          <Route path="products/grid" element={<ProductGrid />} />
          <Route path="products/details" element={<ProductDetails />} />
          <Route path="products/edit" element={<ProductEdit />} />
          <Route path="products/addproduct" element={<AddProduct />} />
          <Route path="products/createproduct" element={<CreateProduct />} />
          <Route path="orders" element={<Orders />} />

          <Route path="orders/users" element={<Users />} />
          <Route path="orders/report" element={<UserView />} />
          <Route path="orders/manage" element={<UserManage />} />

          <Route path="settings" element={<Settings />} />
          <Route path="settings/general" element={<SettingsGeneral />} />
          <Route path="settings/payment" element={<SettingsPayment />} />
          <Route path="settings/shipping" element={<SettingsShipping />} />
          <Route path="settings/user-management" element={<SettingsUserManagement />} />

          <Route path="categories" element={<Categories />} />
          <Route path="categories/list" element={<CategoryList />} />
          <Route path="categories/edit" element={<CategoryEdit />} />
          <Route path="categories/create" element={<CategoryCreate />} />

          <Route path="reviews" element={<Reviews />} />
          <Route path="reviews/list" element={<ReviewList />} />
          <Route path="reviews/manage" element={<ReviewManage />} />

          <Route path="analytics" element={<Analytics />} />
          <Route path="analytics/sales" element={<AnalyticsSales />} />
          <Route path="analytics/traffic" element={<AnalyticsTraffic />} />
          <Route path="analytics/performance" element={<AnalyticsPerformance />} />
        </Route>
        {/* 

           */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
