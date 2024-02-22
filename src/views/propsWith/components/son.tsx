import { ReactNode, PropsWithChildren } from "react";

// interface BbbProps {
//   content: ReactNode;
//   children: ReactNode;
// }
type BbbProps = PropsWithChildren<{ content: ReactNode }>;
const Bbb = (props: BbbProps) => {
  return (
    <div>
      bbb
      <br />
      {props.content}
      <br />
      {props.children}
    </div>
  );
};

function Propswith() {
  return (
    <div>
      <Bbb content={<div>bbb组件传</div>}>
        <div>bbb里面的</div>
      </Bbb>
      <br />
      propwith
    </div>
  );
}
export default Propswith;
