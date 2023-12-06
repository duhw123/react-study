interface IProps {
  name: string;
  isTrue: boolean;
}

function Son(props: IProps) {
  console.log(props);
  return (
    <div>
      子组件
      <br />
      {props.name}
    </div>
  );
}
export default Son;
