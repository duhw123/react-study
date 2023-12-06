import { useState } from "react";

function useToggle() {
  // hooks放可复用的逻辑
  const [value, setValue] = useState(true);
  const toggle = () => {
    setValue(!value);
  };
  // 将外部需要使用的状态和函数return出去
  return { value, toggle };
}
function fn() {
  console.log(111);
}
export { useToggle, fn };
