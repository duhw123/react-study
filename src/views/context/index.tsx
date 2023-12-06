import { createContext } from "react";
import B from "./components/B";
/*
 1. createContext方法创建一个上下文对象
 2. 在顶层组件，通过Provider组件提供数据
 3. 在底层组件 通过useContext钩子函数使用数据
*/
const MsgContext = createContext("");

function Context() {
  const fatherMsg = "父组件最里面的数据";
  return (
    <div>
      <MsgContext.Provider value={fatherMsg}>
        context
        <br></br>
        <B />
      </MsgContext.Provider>
    </div>
  );
}
export default Context;
