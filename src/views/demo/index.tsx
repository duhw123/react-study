import Son from "./components/son";
import { useState, useEffect, useRef } from "react";
import "./index.scss";
import classNames from "classnames";

function Demo() {
  const [tabList] = useState([
    { tab: "最新", id: 1 },
    { tab: "最热", id: 2 },
  ]);
  useEffect(() => {
    setCurrentTab(tabList[0].tab);
  }, [tabList]);
  //   保存当前tab值
  const [currentTab, setCurrentTab] = useState("");
  //   改变tab
  const changeTab = (param: string) => {
    setCurrentTab(param);
  };

  //   受控组件
  const [value, setValue] = useState("");
  //   获取dom
  const inputRef = useRef(null);
  const handleInputDom = () => {
    console.dir(inputRef.current, "dom");
    setValue("");
    // inputRef.current?.focus();
  };
  const parentData = "父组件data, 传给son";
  //   获取子组件的数据
  const [sonMsg, setSonMsg] = useState("");
  const getSonMsg = (msg: string) => {
    setSonMsg(msg);
  };
  return (
    <div className="demo">
      小demo，练习
      <br />
      {tabList.map((item, index) => (
        <span
          onClick={() => changeTab(item.tab)}
          className={classNames(
            "tab-item",
            {
              active: currentTab === item.tab,
            },
            {
              "no-border": index === tabList.length - 1,
            }
          )}
          key={item.id}
        >
          {item.tab}
        </span>
      ))}
      <br />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={handleInputDom}>获取dom</button>
      <Son data={parentData} onGetSonMsg={getSonMsg} />
      <br />
      子组件传过来数据：{sonMsg}
    </div>
  );
}
export default Demo;
