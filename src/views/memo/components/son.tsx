// memo的使用

import { memo, useState, useEffect } from "react";

interface IBProps {
  num: number;
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
    setInterval(() => {
      setNum(3);
    }, 3000);
  });
  return (
    <div>
      memo {num}
      <MemoBaa num={2}></MemoBaa>
    </div>
  );
};
export default Memo;
