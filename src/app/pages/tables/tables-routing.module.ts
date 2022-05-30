import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TablesComponent } from "./tables.component";
import { MaxTableComponent } from "./max-ad-units/max.component";
import { MaxEditComponent } from "./max-ad-units/edit/max-edit.component";
import { MaxCreateComponent } from "./max-ad-units/create/max-create.component";
import { SmartTableComponent } from "./smart-table/smart-table.component";
import { TreeGridComponent } from "./tree-grid/tree-grid.component";

const routes: Routes = [
  {
    path: "",
    component: TablesComponent,
    children: [
      {
        path: "max",
        component: MaxTableComponent,
      },
      {
        path: "max/create",
        component: MaxCreateComponent,
      },
      {
        path: "max/edit",
        redirectTo: "/max/edit/:id",
      },
      {
        path: "max/edit/:id",
        component: MaxEditComponent,
        data: {
          animation: "max/edit",
        },
      },
      {
        path: "smart-table",
        component: SmartTableComponent,
      },
      {
        path: "tree-grid",
        component: TreeGridComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}

export const routedComponents = [TablesComponent, MaxTableComponent, SmartTableComponent, TreeGridComponent];
