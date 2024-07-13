//import React from "react";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import axios from "axios"; //https://axios-http.com/kr/docs/intro --> axios사이트

//import SliderFloatingFilter from "./filter";
import "./styles.css";

function App() {
  //state = {
  //  beers: [],
  //  telno: "100222",
  //  cnt: 0
  //};
  const [cnt, setCnt] = useState(0);

  const [columnDefs, setTaleColumnDefs] = useState([
    {
      headerName: "body",
      field: "body",
      width: 120,
      rowDrag: true
    },
    {
      headerName: "statusCode",
      width: 80,
      field: "statusCode"
    }
  ]);

  const [rowData, setRowData] = useState([]);

  function addRow() {
    setRowData([
      ...rowData,
      {
        addcol: "ddd",
        ordnm: "Mondeo",
        price: 32000,
        pknm: "Hello1",
        body: "newbody",
        statusCode: 300
      }
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

  function fetchBeers() {
    const api =
      "https://6lgpuhq9zj.execute-api.ap-northeast-2.amazonaws.com/selectDynamo3";
    const data = { firstName: "MikeXX", lastName: "HELLOOOX" };
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
    console.log("setCnt-->:" + cnt);
    //this.setState({
    //  cnt: this.state.cnt + 1
    //});
  }

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "200px",
        width: "400px"
      }}
    >
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      <button onClick={addRow}>Add row</button>
      <button onClick={addCol}>Add col</button>
      <button onClick={fetchBeers}> FETCHBEERS_BTN </button>
    </div>
  );
}

function agGrid5(props) {
  return (
    <div>
      <h3>myGrid5 - SelectGrid & add-row </h3>
      <App />
    </div>
  );
}

export default agGrid5;
