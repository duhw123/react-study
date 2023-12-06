interface IProps {
  msg: string;
}

function B(props: IProps) {
  return (
    <div>
      B组件
      <br />
      A组件拿到的数据：{props.msg}
    </div>
  );
}
export default B;
