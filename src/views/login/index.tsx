import { useState } from "react";
import "./index.scss";
import classNames from "classnames";

function Login() {
  const [list, setList] = useState([
    { name: "rose", id: 1 },
    { name: "jack", id: 2 },
    { name: "john", id: 3 },
    { name: "bob", id: 4 },
  ]);
  const tabs = [
    { type: "hot", text: "最热" },
    { type: "new ", text: "最新" },
  ];
  interface ITabs {
    type: string;
    text: string;
  }
  // 记录tab
  const [type, setType] = useState("hot");
  // 奠基石记录type
  const changeTab = (param: ITabs) => {
    setType(param.type);
    if (type === "hot") {
      setList(list.sort((a, b) => b.id - a.id));
    } else {
      setList(list.sort((a, b) => a.id - b.id));
    }
  };

  const myList = { name: "jack", id: 2 };
  interface IlistType {
    name: string;
    id: number;
  }
  const changeName = (param: IlistType, index: number) => {
    console.log(param, index);
    setList({
      ...list,
    });
  };
  // 删除
  const delItem = (item: IlistType) => {
    console.log(item, "123");
  };
  return (
    <div className="login">
      {tabs.map((item) => (
        <span
          className={classNames("tab", { active: type === item.type })}
          onClick={() => changeTab(item)}
          key={item.type}
        >
          {item.text}
        </span>
      ))}
      {list.map((item, index) => (
        <div onClick={() => changeName(item, index)} key={item.name}>
          {item.name}
          {item.id === myList.id && (
            <button onClick={() => delItem(item)}>删除</button>
          )}
        </div>
      ))}
    </div>
  );
}
export default Login;
