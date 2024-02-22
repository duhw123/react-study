import { ReactNode, PropsWithChildren, CSSProperties } from "react";

// interface BbbProps {
//   content: ReactNode;
//   children: ReactNode;
// }
type BbbProps = PropsWithChildren<{
  content: ReactNode;
  color: CSSProperties["color"];
  styles?: CSSProperties;
}>;
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

function CSSProps() {
  return (
    <div>
      <Bbb
        content={<div>bbb组件传</div>}
        color="y"
        styles={{ backgroundColor: "bule" }}
      >
        <div>bbb里面的</div>
      </Bbb>
      <br />
      propwith
    </div>
  );
}
export default CSSProps;
