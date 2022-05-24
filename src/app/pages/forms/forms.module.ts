import { NgModule } from "@angular/core";
import {
  NbActionsModule,
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTooltipModule,
  NbFormFieldModule,
  NbPopoverModule,
} from "@nebular/theme";

import { ThemeModule } from "../../@theme/theme.module";
import { FormsRoutingModule } from "./forms-routing.module";
import { FormsComponent } from "./forms.component";
import { FormInputsComponent } from "./form-inputs/form-inputs.component";
import { MaterialInputsComponent } from "./form-inputs/material-inputs/material-inputs.component";
import { FormLayoutsComponent } from "./form-layouts/form-layouts.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { MaterialButtonsComponent } from "./buttons/material-buttons/material-buttons.component";
import { FormsModule as ngFormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NgSelectModule } from "@ng-select/ng-select";

import { MaxCreateComponent } from "../tables/max-ad-units/create/max-create.component";
import { CountryTargetComponent } from "../tables/max-ad-units/country-target/country-target.component";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
];

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbAccordionModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbFormFieldModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    NbTooltipModule,
    NbPopoverModule,
    ngFormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    ...materialModules,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    MaxCreateComponent,
    CountryTargetComponent,
    DatepickerComponent,
    MaterialInputsComponent,
    MaterialButtonsComponent,
  ],
})
export class FormsModule {}
