import { Routes, BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "../../Components/NavBar";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SingIn";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/sing-in" element={<SingIn />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
