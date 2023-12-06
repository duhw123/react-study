function A({ onGetAMsg }) {
  const name = "组件A的数据";
  return (
    <div>
      A组件 <button onClick={() => onGetAMsg(name)}>发送</button>
      <br />
    </div>
  );
}
export default A;
