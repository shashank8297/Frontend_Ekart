import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Landing/Welcome';
import Login from './Landing/Login';
import Home from './Home/Home';
import Login_R from './Landing/Login_R';
import Login_N from './Landing/Login_N';
import cors from 'cors';
import Order_details from './Home/Order_details';
import Product from './Home/Product';
import Add_Products from "./Home/AddProduct";
import UserDetauls from './Home/UserDetauls';
function App() {

  // const corsOptions = {
  //   origin: 'http://localhost:3000',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  //   optionsSuccessStatus: 204,
  // };

  // app.use(cors(corsOptions));
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path='/Login_R' element={<Login_R />} />
          <Route exact path='/Login_N' element={<Login_N />} />
          <Route exact path='/order_details' element={<Order_details/>}/>
          <Route exact path='/product' element={<Product/>}/>
          <Route exact path='/addProduct' element={<Add_Products/>}/>
          <Route exact path='/userDetails' element={<UserDetauls/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
