import Son from "./components/son";

/*
 1. 父组件传递数据  子组件标签身上绑定数据
 2. 子组件接收数据  props接收
*/
function Cart() {
  const data = "父组件数据，需要传给子组件";
  return (
    <div>
      {/* 属性名随便写 */}
      父向子通信{" "}
      <Son name={data} isTrue={false}>
        <sapn>this is children</sapn>
      </Son>
    </div>
  );
}
export default Cart;
