import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Ref from "./views/home";
import CContext from "./views/context";
import Memo from "./views/memo";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Memo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Ref />} />
        <Route path="/context" element={<CContext />} />
        <Route path="/context" element={<Memo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
