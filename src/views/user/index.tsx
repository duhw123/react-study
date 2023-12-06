import { useState } from "react";
import Button from "./components/button";
import "./index.scss";

function Login() {
  const [msg, setMsg] = useState({
    name: "jack",
  });
  const changeMsg = () => {
    setMsg({
      name: "rose",
    });
  };
  return (
    <div>
      <Button />
      <Button />
      {msg.name}
      <button className="btn" onClick={changeMsg}>
        用户
      </button>
    </div>
  );
}
export default Login;
