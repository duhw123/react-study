import { useRef } from "react";
import { useEffect } from "react";
import React from "react";
import { useImperativeHandle } from "react";

interface IRef {
  getFocus: () => void;
}
interface IProps {
  name: string;
  age: number;
}

const Bbb: React.ForwardRefRenderFunction<IRef, IProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        getFocus() {
          inputRef.current?.focus();
        },
      };
    },
    [inputRef]
  );
  return (
    <div>
      <input ref={inputRef}></input>
      <br />
      bbb {props.name}
    </div>
  );
};

const WrapBbb = React.forwardRef(Bbb);

function ComType() {
  const ref = useRef<IRef>(null);

  const handleFocus = () => {
    ref.current?.getFocus();
  };
  return (
    <div className="App">
      <button onClick={() => handleFocus()}>获取focus</button>
      <WrapBbb name="jack" age={20} ref={ref} />
    </div>
  );
}

export default ComType;
