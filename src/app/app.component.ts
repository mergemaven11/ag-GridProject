import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("agGrid", { static: false }) agGrid: AgGridAngular;
  title = 'app';

  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
  ];

  rowData: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1'); 
   }

  getSelRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map( node => node.make + ' ' + node.model)
      .join(", ");
    alert(`Selected Nodes: ${selectedDataStringPresentation}`);
  }

}
