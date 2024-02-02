import { useRef } from "react";
// import React from "react";
import WrapSon from "./components/son";

function Ref() {
  const ref = useRef<HTMLInputElement>(null);

  function handleFocus() {
    ref.current?.focus();
  }
  return (
    <div>
      <br />
      <button onClick={() => handleFocus()}>获取focus</button>
      <WrapSon ref={ref}></WrapSon>
    </div>
  );
}
export default Ref;
