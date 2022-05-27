import { Component } from "@angular/core";
import { Country } from "../create/max-helper";
import * as ContryCode from "./country-helper";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: "ngbd-dropdown-form",
  styleUrls: ["./country-target.component.scss"],
  templateUrl: "./country-target.component.html",
})
export class CountryTargetComponent {
  groups = ContryCode.groups;

  lsCountry = {
    tier1: ContryCode.country_Tier1,
    eea: ContryCode.country_EEA,
    latam: ContryCode.country_LATAM,
    apac: ContryCode.country_APAC,
    nonEEA: ContryCode.country_nonEEA,
  };

  countryType = "INCLUDE";

  selectedItems = [{ value: "us", label: "United States" }];

  onSelectCountryGroup(id: string) {
    if (this.userSelects.length === 0) {
      this.userSelects.push(...this.lsCountry[id]);
      return;
    }
    this.userSelects = this.mergeArray(this.userSelects, this.lsCountry[id]);
  }

  mergeArray(arr1: Array<ContryCode.IOption>, arr2: Array<ContryCode.IOption>) {
    arr2.forEach((index) => {
      const checkDuplicate = arr1.some((index2) => index2.value === index.value);
      if (!checkDuplicate) {
        arr1.push(index);
      }
    });
    return arr1;
  }

  onApplyCountry(data) {
    console.log(data);
  }
  onDeleteAll() {
    this.userSelects = [];
    this.show = false;
  }
  /** for test country */

  userSelectsString = "";
  name = "Angular";
  userSelects = [];
  suggestions = [...ContryCode.country_Tier1, ...ContryCode.country_EEA, ...ContryCode.country_LATAM, ...ContryCode.country_APAC, ...ContryCode.country_nonEEA].sort((a: any, b: any) =>
    a.label > b.label ? 1 : b.label > a.label ? -1 : 0
  );

  show: boolean = false;

  onKeyPress($event: any) {
    if ($event.target.value) {
      this.show = true;
      // console.log(this.userSelects);
      const results = this.suggestions.filter((item) => item.label.toLowerCase().includes($event.target.value));
      //  console.log(results);
      this.suggestions = results;
      //  console.log($event.target.value);
    } else {
      this.suggestions = [...ContryCode.country_Tier1, ...ContryCode.country_EEA, ...ContryCode.country_LATAM, ...ContryCode.country_APAC, ...ContryCode.country_nonEEA].sort((a: any, b: any) =>
        a.label > b.label ? 1 : b.label > a.label ? -1 : 0
      );
    }
  }

  isSelected(s: any) {
    return this.userSelects.findIndex((item) => item.value === s.value) > -1 ? true : false;
  }

  selectSuggestion(s) {
    this.userSelects.find((item) => item.value === s.value) ? (this.userSelects = this.userSelects.filter((item) => item.value !== s.value)) : this.userSelects.push(s);
  }

  deleteSelects(s) {
    console.log(s);
    // this.userSelects = this.userSelects.filter((item) => item.value !== s.value);
    this.userSelects = this.userSelects.filter((item) => item.value !== s.value);
    console.log(this.userSelects);
  }

  assignToNgModel() {
    this.userSelectsString = "";
    this.userSelects.map((item) => (this.userSelectsString += item.label + " "));
  }
}
