import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Home from "./views/home";
import User from "./views/user";
import Cart from "./views/cart";
import Layout from "./views/layout";
import Bro from "./views/bro";
import Demo from "./views/demo";
import Context from "./views/context";
import Clear from "./views/clear";
import Zustand from "./views/zustand";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/bro" element={<Bro />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/context" element={<Context />} />
        <Route path="/clear" element={<Clear />} />
        <Route path="/zustand" element={<Zustand />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
