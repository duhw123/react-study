import { useRef, useState } from "react";

function Home() {
  const [num, setNum] = useState(0);
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const getRef = () => {
    console.dir(inputRef.current);
    console.log(inputRef.current?.value);
  };
  return (
    <div>
      表单受控绑定
      <br />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      ></input>
      <button onClick={getRef}>获取ref</button>
      <br />
      {num}
      <button onClick={() => setNum(num + 1)}>增加</button>
    </div>
  );
}
export default Home;
