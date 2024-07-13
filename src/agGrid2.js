import "./styles.css";
import React, { Component } from "react";
//import ReactDOM from "react-dom";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
//import AgInputWithValue from "./AgInputWithValue";
//import AgCheckboxWithValue from "./AgCheckboxWithValue";

const numMetrics = 2;
const numSegments = 20;
const numDays = 365;
const cols = ["Current", "Recommended", "Override"];
const colsKeys = ["current", "recommended", "override"];
//const cellRenderers = [undefined, AgCheckboxWithValue, AgInputWithValue];

const getData = (colTypeIndex, repIndex, rowIndex) => {
  const colIndex = repIndex * 3 + colTypeIndex;
  if (colTypeIndex === 0) {
    return Math.random() * 500;
  } else if (colTypeIndex === 1) {
    return {
      value: colIndex + rowIndex
    };
  } else {
    return {
      isChecked: false,
      value: colIndex + rowIndex
    };
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    const columnDefs = [];
    for (let i = 0; i < numMetrics; i++) {
      columnDefs.push({
        headerName: `Metric #${i}`,
        field: `metric_${i}`,
        minWidth: 160
      });
    }

    for (let i = 0; i < numSegments; i++) {
      cols.forEach((col, index) => {
        const colDef = {
          headerName: `${col} ${i}`,
          field: `${colsKeys[index]}${i}`,
          minWidth: 160
        };
        //const cellRenderer = cellRenderers[index];
        //if (cellRenderer !== undefined) {
        //  colDef.cellRendererFramework = cellRenderer;
        //}

        columnDefs.push(colDef);
      });
    }

    const rows = [];
    for (let i = 0; i < numDays; i++) {
      const rowData = { rowIndex: i };
      for (let j = 0; j < numSegments; j++) {
        colsKeys.forEach((colKey, index) => {
          rowData[`${colKey}${j}`] = getData(index, j, i);
        });
      }
      for (let k = 0; k < numMetrics; k++) {
        const field = `metric_${k}`;
        rowData[field] = Math.random() * 20;
      }
      rows.push(rowData);
    }

    this.state = {
      columnDefs,
      rowData: rows
    };

    this.showData = this.showData.bind(this);
  }

  onGridReady(params) {
    window.agGrid = params;

    // resizes the columns so they fit
    params.api.sizeColumnsToFit();
    window.agGrid = params.api;
  }

  showData() {
    const data = [];
    window.agGrid.forEachNode((node) => data.push(node.data));
    alert(JSON.stringify(data));
  }

  render() {
    return (
      <>
        <button onClick={this.showData}>Show data</button>
        <div
          className="ag-theme-balham table"
          style={{
            height: "200px",
            width: "400px"
          }}
        >
          <AgGridReact
            suppressCellSelection
            suppressAnimationFrame
            debounceVerticalScrollbar
            rowBuffer={30}
            onGridReady={this.onGridReady}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            enableCellChangeFlash={true}
          />
        </div>
      </>
    );
  }
}

function agGrid2() {
  return (
    <div>
      <h1>myGrid2 </h1>
      <App />
    </div>
  );
}

export default agGrid2;
