import { useCountStore, useInfoStore } from "../../store";

function CeShi() {
  const { count, inc } = useCountStore();
  const { info, setInfo } = useInfoStore();

  const countAdd = () => {
    inc(5);
  };

  const chengeInfo = () => {
    setInfo({ name: "rose", age: 20 });
  };
  return (
    <div>
      zustand学习
      <br />
      {count}
      <button onClick={countAdd}>增加</button>
      <br />
      {info.age} {info.name}
      <button onClick={chengeInfo}>改变信息</button>
    </div>
  );
}
export default CeShi;
