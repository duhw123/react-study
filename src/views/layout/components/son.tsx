function Son({ onGetSonMsg }) {
  const msg = "子组件的数据";
  return (
    <div>
      子组件
      <br />
      <button onClick={() => onGetSonMsg(msg)}>获取子数据</button>
    </div>
  );
}
export default Son;
