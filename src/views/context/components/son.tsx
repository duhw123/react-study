import { createContext, useContext } from "react";

const countContext = createContext(11);

const Aaa = () => {
  const count = useContext(countContext);
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
    </div>
  );
};
export default CContext;
