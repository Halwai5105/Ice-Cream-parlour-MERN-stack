import React from "react";
import Navbar from './components/navbar/navbar.jsx'
import Sidebar from './components/sidebar/sidebar.jsx'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/add/add.jsx'
import List from './pages/list/List.jsx'
import Order from './pages/orders/Order.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () =>{
  const url = "http://localhost:5000";

  return (
    <div>
      <ToastContainer/>
        <Navbar/>
        <hr/>
        <div className="app-content">
          <Sidebar/>
          <Routes>
            <Route path="/add" element={<Add url={url}/>}/>
            <Route path="/list" element={<List url={url}/>}/>
            <Route path="/orders" element={<Order url={url}/>}/>
          </Routes>
        </div>
    </div>
  )

}

export default App