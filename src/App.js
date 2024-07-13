import React from "react";
import agGrid1 from "./agGrid1";
import Hello1 from "./Hello1";
import agGrid2 from "./agGrid2";
import agGrid3 from "./agGrid3";
import agGrid4 from "./agGrid4";
import agGrid5 from "./agGrid5";
import agGrid6 from "./agGrid6";
import agGrid7 from "./agGrid7";

export default function App() {
  return (
    <div>
      {/*<Hello1 title1="we" title2="33" /> */}
      {agGrid7()}
      {/* <Hello1 title1="we44" title2="3344" /> */}
      <div>.</div>
      <div>.</div>

      {agGrid6()}
      <div>.</div>
      <div>.</div>

      {/* <Hello1 title1="we44" title2="3344" /> */}
      {agGrid5()}
      <div> {agGrid4()} </div>
      <div>.</div>
      <div>.</div>

      {agGrid3()}
      <div>.</div>
      <div>.</div>

      {agGrid2()}
      <div>.</div>
      <div>.</div>

      {/* {Hello1((title1 = "eee"), (title2 = "222"))} */}
      {agGrid1()}
      {agGrid1()}
      {agGrid1()}
    </div>
  );
}
