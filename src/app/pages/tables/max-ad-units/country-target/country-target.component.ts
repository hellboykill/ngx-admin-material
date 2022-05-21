import { Component } from "@angular/core";
import { Country } from "../create/max-helper";
import * as ContryCode from "./country-helper";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { timingSafeEqual } from "crypto";

@Component({
  selector: "ngbd-dropdown-form",
  styleUrls: ["./country-target.component.scss"],
  templateUrl: "./country-target.component.html",
})
export class CountryTargetComponent {
  tier1 = ContryCode.country_Tier1;
  eea = ContryCode.country_EEA;
  latam = ContryCode.country_LATAM;
  groups = ContryCode.groups;
  dropdownList = [...this.tier1, ...this.eea, ...this.latam].sort((a: any, b: any) =>
    a.label > b.label ? 1 : b.label > a.label ? -1 : 0
  );

  countryType = "INCLUDE";

  dropdownSettings: IDropdownSettings = {
    closeDropDownOnSelection: false,
    itemsShowLimit: 50,
    enableCheckAll: false,
    idField: "value",
    textField: "label",
    maxHeight: 400,
    allowSearchFilter: true,
  };

  selectedItems = [{ value: "us", label: "United States" }];

  onItemSelect(item: any) {
    // this.selectedItems.push(item);
    // console.log(this.selectedItems);
    console.log("onItemSelect", item);
  }

  onItemDeSelect(item: any) {
    // let newItem = [];
    // this.selectedItems.forEach((index) => {
    //   if (index !== item.value) {
    //     newItem.push(item);
    //   }
    // });
    // this.selectedItems = newItem;
    console.log("selected item after delete", this.selectedItems);
    console.log("onItemDeSelect", item);
  }
  onSelectCountryGroup(id: string) {
    this.selectedItems.push(...this.latam);
    console.log(this.selectedItems);
    console.log(id);
  }

  onApplyCountry(data) {
    console.log(data);
  }
}
