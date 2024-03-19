import { memo, useState, useCallback, useMemo } from "react";

interface BbbProps {
  num: number;
  callBack: Function;
}

const Bbb = (props: BbbProps) => {
  const { num } = props;
  console.log("Bbb");
  return (
    <div>
      baa
      <br />
      {num}
    </div>
  );
};
const MemoBaa = memo<BbbProps>(Bbb);

function Demo() {
  const [num, setNum] = useState(0);
  const number = 10;

  const BaaCallback = useCallback<() => void>(function BaaCallback() {
    console.log(22);
  }, []);

  const num2 = useMemo<number>(() => {
    return number * 2;
  }, [number]);

  const changeNum = () => {
    setNum((number) => number + 1);
  };
  return (
    <div>
      demo练习
      <button onClick={() => changeNum()}>改变</button>
      <br />
      <MemoBaa num={num2} callBack={BaaCallback}></MemoBaa>
      <br />
      {num}
    </div>
  );
}
export default Demo;
