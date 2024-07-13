//import React from "react";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import axios from "axios"; //https://axios-http.com/kr/docs/intro --> axios사이트

//import SliderFloatingFilter from "./filter";
import "./styles.css";

function App2() {
  const [cnt, setCnt] = useState(0);
  const [CellChangedCnt, setCellChangedCnt] = useState(0);
  const [bdate, setBdate] = useState("19991231");

  const [columnDefs, setTaleColumnDefs] = useState([
    {
      headerName: "pknm",
      field: "pknm",
      width: 120,
      rowDrag: true
    },
    {
      headerName: "ordnm",
      width: 80,
      editable: true /*컬럼editable를 결정한다*/,
      field: "ordnm"
    },
    {
      headerName: "cud",
      width: 80,
      field: "cud"
    }
  ]);
  const [rowData, setRowData] = useState([]);

  function addRow() {
    setRowData([
      {
        addcol: "ddd",
        price: 32000,
        pknm: "add1",
        body: "newbody",
        ordnm: "Mondeo",
        statusCode: 300
      },
      ...rowData
    ]);
  }
  function addCol() {
    setTaleColumnDefs([
      ...columnDefs,
      {
        headerName: "add",
        width: 60,
        field: "addcol"
      }
    ]);
  }

  function handleChangeBDate(e) {
    /* setBdate({ bdate: e.target.value }); */
    setBdate(e.target.value);
    console.log("handleChangeBDate : ", bdate);
  }

  function fetchBeers() {
    const api =
      "https://6lgpuhq9zj.execute-api.ap-northeast-2.amazonaws.com/selectDynamo3";
    const data = {
      scrno: "9111",
      tdate: { bdate },
      scrdata: { pknm: "MikeXX", ordnm: "HELLOOOX" }
    };
    //alert(bdate);
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
        //this.setState({
        //  telno: "fetchBeers:"
        //});
        //this.setState({
        //  telno: this.state.telno + JSON.stringify(response.data)
        //});

        //setRowData([...rowData, JSON.stringify(response.data)]);
        //setRowData([...rowData, {statusCode: "sstt", body: "bbooddyy"}]  );
        setRowData(response.data);

        //this.gridApi.setRowData(this.rowData);

        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    setCnt(cnt + 1);
    console.log("setCnt-->:", cnt);
    //this.setState({
    //  cnt: this.state.cnt + 1
    //});
  }

  function updateBeers() {
    const api =
      "https://tpt7ymu1ye.execute-api.ap-northeast-2.amazonaws.com/restapiStage101";
    const data = { firstName: "newFirst33", lastName: "newNm33" };

    rowData.forEach(function (rowrec, index) {
      if (rowrec.cud === "수정") {
        console.log("수정", index);
        //rowrec.cud = index;
        rowrec.cud = "Done";

        //data.lastName = "updFirst";
        data.firstName = rowrec.ordnm;
        data.lastName = rowrec.pknm;
        axios
          .post(api, data)
          .then((response) => {
            console.log(response);
            //setRowData(response.data);
            console.log(JSON.stringify(response.data));
            //alert(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
        setCnt(cnt + 1);
      }
    });

    setRowData(
      rowData.map((rowx, index) =>
        rowx.cud === "Done" ? { ...rowx, cud: "Succ" } : rowx
      )
    );

    //setRowData(
    //  rowData.map((rowx, index) =>
    //    params.node.rowIndex === index ? { ...rowx, cud: "수정" } : rowx
    //  )
    //);

    //rowData.map(
    //  (rowx, index) => (rowx.cud = "new")
    //  //console.log(index);
    //);

    //this.gridColumnApi.getAllColumns().forEach(function (column) {
    //  allColumnIds.push(column.colId);
    //});

    console.log("setCnt(updateBeers)-->:", cnt);
  }

  function onCellClicked(params) {
    console.log(params);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    var that = this;
    console.log("cell-clicked");
    console.log("params.column.getColId():", params.column.getColId());
    console.log("params.column.getColDef():", params.column.getColDef());
    console.log("params.value:", params.value);
    console.log("params.colDef.field:", params.colDef.field);
  }

  function onCellValueChanged(params) {
    //console.log(params);
    //this.gridApi = params.api;
    //this.gridColumnApi = params.columnApi;

    //var that = this;
    //alert("cell-value-changed");
    //console.log("cell-value-changed:rowIndex=", params.node.rowIndex);
    console.log(params.node.rowIndex);
    //console.log("params.column.getColId():", params.column.getColId());
    //console.log("params.column.getColDef():", params.column.getColDef());
    //console.log("params.value:", params.value);
    //console.log("params.colDef.field:", params.colDef.field);
    setCellChangedCnt(CellChangedCnt + 1);
    //setRowData((rowData[2].ordnm = "mod"));
    //
    //  -->어떻게 rowData[rowIndex].ordnm 값을 바꿀수 있지???
    //     https://mnxmnz.github.io/react/array-immutable/
    //     https://blog.woolta.com/categories/1/posts/210
    // -->이방식으로 바꾼다.

    /*
    setRowData(
      rowData.map((rowd) =>
        rowd.pknm === "HELLOOOX" ? { ...rowd, cud: "수정34" } : rowd
      )
    );
    */
    /*
    setRowData(
      rowData.map((rowData) =>
        rowData.pknm === params.value ? { ...rowData, cud: "수정" } : rowData
      )
    );
    */
    // 수정된row번호의 cud칼럼에 "수정"여부를 표시한다.
    setRowData(
      rowData.map((rowx, index) =>
        params.node.rowIndex === index ? { ...rowx, cud: "수정" } : rowx
      )
    );
  }

  function onCellEditingStopped(params) {
    //console.log(params);
    //this.gridApi = params.api;
    //this.gridColumnApi = params.columnApi;

    //var that = this;
    console.log("CellEditing-Stopped");
    //console.log("params.column.getColId():", params.column.getColId());
    //console.log("params.column.getColDef():", params.column.getColDef());
    //console.log("params.value:", params.value);
    //console.log("params.colDef.field:", params.colDef.field);
  }

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "200px",
        width: "300px"
      }}
    >
      기준일자
      <input
        value={bdate}
        onChange={(e) => handleChangeBDate(e)}
        style={{
          height: 19,
          width: 80,
          borderColor: "red",
          borderWidth: 1,
          color: "blue",
          fontSize: 14
        }}
      />
      <button
        /*  
        onClick={this.summitButton.bind(this)}
        disabled={this.state.buttonDisabled}
        */
        onClick={fetchBeers}
      >
        {" "}
        조회{" "}
      </button>
      <button onClick={updateBeers}> 등록 </button>
      changed:{CellChangedCnt}
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        /* onCellClicked={onCellClicked.bind(this)} */
        onCellValueChanged={onCellValueChanged.bind(this)}
        /* onCellEditingStopped={onCellEditingStopped.bind(this)} */
      />
      <button onClick={addRow}>Add row</button>
      <button onClick={addCol}>Add col</button>
      <button onClick={fetchBeers}> FETCHBEERS_BTN </button>
    </div>
  );
}

function agGrid6(props) {
  return (
    <div>
      <h3>myGrid6 - EditGrid & update2DbTable </h3>
      <App2 />
    </div>
  );
}

export default agGrid6;
