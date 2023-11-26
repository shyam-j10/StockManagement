import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";

import Users from "./pages/Users";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Header from "./layout/Header";

import Cart from "./pages/Cart";

import Products from "./pages/Products";
import LoginForm from "./pages/LoginForm";
import SummaryPage from "./pages/SummaryPage";
import LoginRegister from "./pages/LoginRegister";
import ForgetPassword from "./users/ForgetPassword";
import Admins from "./pages/Admins";
import AddAdmin from "./pages/admins/AddAdmin";
import AddProduct from "./product/AddProduct"
function App() {
  return (
    <div className="App">
      <div>
        <Router>
        <Navbar/>

          <Routes>
            <Route exact path="/" element={<Header />} />
            
      
                <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/loginform" element={<LoginForm />} />
            <Route exact path="/loginregister" element={<LoginRegister />} />
            <Route exact path="/admin" element={<Admins />} />
            <Route exact path="/admin/addadmin" element={<AddAdmin />} />
            <Route exact path="/summarypage" element={<SummaryPage />} />

            
            
          </Routes>

          <Routes>
            
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            
            <Route exact path="/addproduct" element={<AddProduct />} />

            
          </Routes>

          <Routes>
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/user/adduser" element={<AddUser />} />
            <Route exact path="/user/edituser/:id" element={<EditUser />} />
            <Route exact path="/user/viewuser/:id" element={<ViewUser />} />
            <Route exact path="/user/forgetpassword" element={<ForgetPassword />} />

          </Routes>
          
        </Router>
      </div>
    </div>
  );
}

export default App;
