import { Fragment } from "react";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { AgGridReact } from "ag-grid-react";
//import "ag-grid/dist/styles/ag-grid.css";
//import "ag-grid/dist/styles/ag-theme-balham.css";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

//import { Switch, Route } from "react-router-dom";
//import About from '../pages/About/AboutPage.js';

//import { navigate } from "@reach/router";

import "./styles.css";

class GridExample extends Component {
  constructor(props) {
    super(props);

    // ,("주문일자","고객명","전화번호","송장번호","출고상품내역","배송메세지","판매처","주소1","거래명"))
    this.state = {
      columnDefs: [
        {
          headerName: "순번 ",
          field: "SEQ",
          width: 55,
          suppressSizeToFit: true
        },
        {
          headerName: "처리일",
          field: "기준일",
          width: 80,
          suppressSizeToFit: true
        },
        {
          headerName: "주문일",
          field: "주문일",
          width: 80,
          suppressSizeToFit: true
        }
      ],

      rowModelType: "serverSide",
      pagination: true,
      paginationPageSize: 200,
      cacheBlockSize: 200,

      rowData: [],

      columnDefs22: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ],
      rowData22: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ]
    };

    const rowData33 = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ];
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div class="grid-wrapper">
          <div
            id="myGrid"
            style={{
              boxSizing: "border-box",
              height: "20%",
              width: "30%"
            }}
            className="ag-theme-balham"
          >
            <AgGridReact
              rowModelType="infinite"
              columnDefs={this.state.columnDefs}
              enableColResize={true}
              rowData={this.state.rowData22}
              showGrid={this.state.showGrid}
              enableFilter={true}
              enableSorting={true}
              enableServerSideFilter={true}
              enableServerSideSorting={true}
              pagination={true}
              paginationPageSize={50}
              cacheBlockSize={50}
              onFilterModified={(...a) => console.log("onFilterModified", ...a)}
              onFilterChanged={(...a) => console.log("onFilterChanged", ...a)}
            />
          </div>
        </div>
      </div>
    );
  }
}

class App3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "200px",
          width: "1380px",
          fontsize: "128"
        }}
      >
        <GridExample />
      </div>
    );
  }
}

const agGrid3 = () => (
  <div>
    <h5>myGrid3</h5>
    <h5>204.송장조회-Hello107_nav(원본220604) </h5>
    <App3 />
  </div>
);
export default agGrid3;
