import { useState, useEffect } from "react";
import Son from "./components/son";

/*
 1. 父组件传递数据  子组件标签身上绑定数据
 2. 子组件接收数据  props接收
*/
function Layout() {
  const [sonData, setSonData] = useState("");

  const getMsg = (msg: string) => {
    setSonData(msg);
  };

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("更新了");
  }, [count]);
  return (
    <div>
      子向父传参
      <Son onGetSonMsg={getMsg}></Son>
      <br />
      {sonData}
      <br />
      {count}
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
export default Layout;
