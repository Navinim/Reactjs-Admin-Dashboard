import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UserList } from "./pages/userList/UserList";
import {User} from "./pages/userInfo/User"
import { NewUser } from "./pages/addUser/NewUser";
import { ProductList } from "./pages/productList/ProductList";
import { Product } from "./pages/productInfo/Product";
import { NewProduct } from "./pages/addproduct/NewProduct";


function App() {
  return (
    <>
      <Router>
        < Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />}/>     
            <Route path="/users" element={<UserList />}/>
            <Route path="/user/:userId" element={<User />}/>
            <Route path="/newUser" element={<NewUser />}/>
            <Route path="/products" element={<ProductList />}/>
            <Route path="/product/:productId" element={<Product />}/>
            <Route path="/newProduct" element={<NewProduct />}/>
                        
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
