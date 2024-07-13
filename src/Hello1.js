import React from "react";

function Hello1(props) {
  return (
    <div>
      함수Hello1()... 1={props.title1} 2={props.title2}
    </div>
  );
}
Hello1.defaultProps = {
  title1: "이름없음1",
  title2: "이름없음2"
};
export default Hello1;
