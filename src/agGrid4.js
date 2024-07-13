//import React from "react";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

//import SliderFloatingFilter from "./filter";
import "./styles.css";

function App() {
  const [columnDefs, setTaleColumnDefs] = useState([
    {
      headerName: "ROI名称",
      field: "roiName",
      rowDrag: true
    },
    {
      headerName: "price",
      field: "price"
    }
  ]);

  const [rowData, setRowData] = useState([]);

  function addRow() {
    setRowData([
      ...rowData,
      {
        adddd: "ddd",
        model: "Mondeo",
        price: 32000,
        roiName: "Hello1"
      }
    ]);
  }
  function addCol() {
    setTaleColumnDefs([
      ...columnDefs,
      {
        headerName: "add",
        field: "adddd"
      }
    ]);
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
    </div>
  );
}

function agGrid4(props) {
  return (
    <div>
      <h4>myGrid4</h4>
      <App />
    </div>
  );
}

export default agGrid4;
