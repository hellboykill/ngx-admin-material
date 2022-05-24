import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { MaxTableData } from "../../../@core/data/max-table";
import { MaxEditComponent } from "./edit/max-edit.component";
import { CustomEditorComponent } from "./edit/custom-editor.component";
import { Router } from "@angular/router";

@Component({
  selector: "max",
  templateUrl: "./max.component.html",
  styleUrls: ["./max.component.scss"],
})
export class MaxTableComponent {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: "right",
    },
    columns: {
      application: {
        title: "Application",
        type: "string",
      },
      adsUnit: {
        title: "Ad Unit",
        type: "string",
      },
      adsId: {
        title: "Ad Unit ID",
        type: "string",
      },
      adsType: {
        title: "Ad Type",
        type: "string",
      },
      platform: {
        title: "Platform",
        type: "string",
        filter: {
          type: "list",
          config: {
            selectText: "Select...",
            list: [
              { value: "android", title: "android" },
              { value: "ios", title: "ios" },
              { value: "fireos", title: "fireos" },
            ],
          },
        },
      },
      status: {
        title: "Status",
        type: "boolean",
        filter: false,
      },
      // Edit: {
      //   title: "Edit",
      //   type: "html",
      //   valuePrepareFunction: (cell, row) => {
      //     return `<a title="See Detail Unit"href="pages/tables/max/${row.adsId}"> <i class="ion-edit"></i></a>`;
      //   },
      //   renderComponent: MaxEditComponent,
      //   onComponentInitFunction: (instance) => {
      //     instance.save.subscribe((row) => {
      //       console.log(row);
      //     });
      //   },
      //   filter: false,
      // },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: MaxTableData) {
    this.getAdUnits();
  }
  async getAdUnits() {
    const data = await this.service.getData();
    this.source.load(data);
  }

  // onSearch(query: string = "") {
  //   this.source.setFilter(
  //     [
  //       // fields we want to include in the search
  //       {
  //         field: "application",
  //         search: query,
  //       },
  //       {
  //         field: "adsUnit",
  //         search: query,
  //       },
  //       {
  //         field: "adsId",
  //         search: query,
  //       },
  //       {
  //         field: "adsType",
  //         search: query,
  //       },
  //       {
  //         field: "platform",
  //         search: query,
  //       },
  //     ],
  //     true
  //   );
  //   // second parameter specifying whether to perform 'AND' or 'OR' search
  //   // (meaning all columns should contain search query or at least one)
  //   // 'AND' by default, so changing to 'OR' by setting false here
  // }
}
