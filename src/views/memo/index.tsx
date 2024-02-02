import { memo, useState, useEffect, useMemo, useCallback } from "react";

interface IBProps {
  num: number;
  callback: Function;
}
const Bbb = (props: IBProps) => {
  const { num } = props;
  console.log(num);
  return (
    <div>
      <br />
      bbb子组件
    </div>
  );
};
const MemoBaa = memo(Bbb);

const Memo = () => {
  const [num, setNum] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setNum(Math.random());
    }, 3000);
  });

  const bbbCallback = useCallback(() => {
    console.log("bbb");
  }, []);

  const count2 = useMemo(() => {
    return num * 2;
  }, [num]);
  return (
    <div>
      memo {count2}
      {/* callback={bbbCallback} */}
      <MemoBaa num={count2} callback={bbbCallback}></MemoBaa>
    </div>
  );
};
export default Memo;
