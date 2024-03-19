import { createContext, useContext } from "react";

const countContext = createContext(111);

const Aaa = () => {
  return (
    <div>
      <countContext.Provider value={123}>
        <Bbb></Bbb>
      </countContext.Provider>
      aaa
    </div>
  );
};
const Bbb = () => {
  return (
    <div>
      <Ccc></Ccc>
      bbb
    </div>
  );
};
const Ccc = () => {
  const count = useContext(countContext);
  return <div>ccc{count}</div>;
};
export default Aaa;
