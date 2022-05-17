import { Component, NgModule, OnInit } from "@angular/core";
import * as MaxConfig from "./max-helper";
import { CountryTargetComponent } from "../country-target/country-target.component";
import axios from "axios";
@Component({
  selector: "ngx-form-layouts",
  styleUrls: ["./max-create.component.scss"],
  templateUrl: "./max-create.component.html",
})
export class MaxCreateComponent {
  platforms = MaxConfig.platforms;
  adTypes = MaxConfig.adTypes;
  templateSizes = MaxConfig.templateSizes;
  frequencyCapping = MaxConfig.isSelected;
  bidFloor = MaxConfig.isSelected;
  ad_network_settings = MaxConfig.ad_netwok;
  networks = MaxConfig.AD_NETWORK;

  contryTargetComponent = CountryTargetComponent;

  isFrequencyCapping: boolean = false;
  isBidFloor: boolean = false;
  platform: string;
  adType: string;
  adUnit: string;
  package: string;
  templateSize: string;

  toggleNetwork(checked: boolean, key: string) {
    this.networks[key] = checked;
  }

  onClickSubmit(data: any) {
    console.table(data);
    // axios
    //   .post("http://localhost:3333/max/ad_unit", {
    //     adsName: data.adUnit,
    //     packageName: data.package,
    //     adType: data.adType,
    //     platform: data.platform,
    //   })
    //   .then((rs) => console.log(rs.data))
    //   .catch((err) => console.log(err));
  }
}
