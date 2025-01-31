import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function agGrid1() {
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  return (
    <div>
      <h1>myGrid1 </h1>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowData}>
          <AgGridColumn field="make" sortable={true}></AgGridColumn>
          <AgGridColumn field="model"></AgGridColumn>
          <AgGridColumn
            field="price"
            filter={true}
            sortable={true}
          ></AgGridColumn>
          <AgGridColumn field="test"></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}

export default agGrid1;
