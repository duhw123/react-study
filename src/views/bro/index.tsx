import A from "./components/A";
import B from "./components/B";
import { useState } from "react";

function Bro() {
  /*
    1. 通过子传父  A -> App
    2. 通过父传子 App -> B
    */
  const [msg, setMsg] = useState("");
  const getAMsg = (msg: string) => {
    console.log(msg);
    setMsg(msg);
  };
  return (
    <div>
      兄弟传参
      <A onGetAMsg={getAMsg} />
      <B msg={msg} />
      <br />
    </div>
  );
}
export default Bro;
