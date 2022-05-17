import { Component } from "@angular/core";
import { Country } from "../create/max-helper";
import { country_Tier1, country_EEA } from "./country-helper";
@Component({
  selector: "ngbd-dropdown-form",
  styleUrls: ["./country-target.component.scss"],
  templateUrl: "./country-target.component.html",
})
export class CountryTargetComponent {
  countryTypes: [{ value: "INCLUDE"; label: "Include"; checked: true }, { value: "EXCLUDE"; label: "Exclude" }];
  countryType: string;
  tier1 = country_Tier1;
  eea = country_EEA;
  contryList = [
    { id: 1, itemName: "India" },
    { id: 2, itemName: "Singapore" },
    { id: 3, itemName: "Australia" },
    { id: 4, itemName: "Canada" },
    { id: 5, itemName: "South Korea" },
    { id: 6, itemName: "Germany" },
    { id: 7, itemName: "France" },
    { id: 8, itemName: "Russia" },
    { id: 9, itemName: "Italy" },
    { id: 10, itemName: "Sweden" },
  ];
  selectedItems = [
    { id: 2, itemName: "Singapore" },
    { id: 3, itemName: "Australia" },
    { id: 4, itemName: "Canada" },
    { id: 5, itemName: "South Korea" },
  ];
  dropdownSettings = {
    singleSelection: false,
    text: "Select Countries",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    enableSearchFilter: true,
    classes: "myclass custom-class",
  };
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}
