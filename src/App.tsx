import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Ref from "./views/home";
import CContext from "./views/context";
import Memo from "./views/memo";
import Demo from "./views/demo";
import ComType from "./views/comType";
import PropWith from "./views/propsWith";
import CSSPros from "./views/cssProps";
import TiaoShi from "./views/tiaoShi";
// TiaoShi

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TiaoShi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Ref />} />
        <Route path="/context" element={<CContext />} />
        <Route path="/context" element={<Memo />} />
        <Route path="/context" element={<Demo />} />
        <Route path="/context" element={<ComType />} />
        <Route path="/context" element={<PropWith />} />
        <Route path="/context" element={<CSSPros />} />
        <Route path="/context" element={<TiaoShi />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
