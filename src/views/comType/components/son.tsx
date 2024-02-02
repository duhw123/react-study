import React from "react";
interface BaaProps {
  content: React.ReactNode;
}
const Bbb: React.FunctionComponent<BaaProps> = (props: BaaProps) => {
  const { content } = props;
  return (
    <div>
      {content}
      <br />
      bbb
    </div>
  );
};

// const content = <div>一个组件</div>;
function ComType() {
  return (
    <div>
      <Bbb content={null}></Bbb>
      <br></br>
      comType
    </div>
  );
}
export default ComType;
