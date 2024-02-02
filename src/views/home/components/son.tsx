// import { useRef } from "react";
import React from "react";
const Son: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  console.log(props, "props");
  return (
    <div>
      <br />
      <input ref={ref}></input>
    </div>
  );
};
const WrapSon = React.forwardRef(Son);
export default WrapSon;
