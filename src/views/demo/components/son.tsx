interface IProps {
  data: string;
  onGetSonMsg: any;
}
function Son(props: IProps) {
  console.log(props, "111");
  const sonData = "子组件数据";
  return (
    <div>
      子组件
      <br />
      父组件传过来数据：{props.data}
      <button onClick={() => props.onGetSonMsg(sonData)}>传给父组件数据</button>
    </div>
  );
}
export default Son;
