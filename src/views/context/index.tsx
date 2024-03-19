import { createContext, useContext } from "react";
import Aaa2 from "./components/son2";
const countContext = createContext(11);

const Aaa = () => {
  const count = useContext<number>(countContext);
  return <div>Aaa {count}</div>;
};
const Bbb = () => {
  return (
    <div>
      <Aaa></Aaa>
      Baa
    </div>
  );
};

const CContext = () => {
  return (
    <div>
      <countContext.Provider value={222}>
        <Bbb></Bbb>
      </countContext.Provider>
      跨级传参
      <Aaa2></Aaa2>
    </div>
  );
};
export default CContext;
