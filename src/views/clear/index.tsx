import { useReducer } from "react";
import { useToggle } from "./hooks";
import { IAction } from "./type";

function numReducer(state: number, action: IAction) {
  switch (action.type) {
    case "INC":
      state + 1;
      break;
    case "DEC":
      state - 1;
      break;
    default:
      state;
      break;
  }
}

function Clear() {
  const { value, toggle } = useToggle();
  const [state, dispatch] = useReducer(numReducer, 0);

  const increce = () => {
    dispatch();
  };
  const decrese = () => {};
  return (
    <div>
      useEffect副作用，卸载组件
      <br />
      {value && <div>this is div</div>}
      <button onClick={toggle}>卸载son组件</button>
      <br />
      {state}
      <button onClick={increce}>增加</button>
      <button onClick={decrese}>减少</button>
    </div>
  );
}
export default Clear;
