import { Component, NgModule, OnInit } from "@angular/core";
import * as MaxConfig from "./max-helper";
import { CountryTargetComponent } from "../country-target/country-target.component";
import axios from "axios";
import * as CountryCode from "../country-target/country-helper";
import { CountryDataService } from "../../../../@core/data/country-code";
import { Observable } from "rxjs";
import { CountryOrderService } from "../../../../@core/mock/country-order.service";

@Component({
  selector: "ngx-form-layouts",
  styleUrls: ["./max-create.component.scss"],
  templateUrl: "./max-create.component.html",
})
export class MaxCreateComponent implements OnInit {
  platforms = MaxConfig.platforms;
  adTypes = MaxConfig.adTypes;
  templateSizes = MaxConfig.templateSizes;
  frequencyCapping = MaxConfig.isSelected;
  bidFloor = MaxConfig.isSelected;
  networks = MaxConfig.AD_NETWORK;

  lsnetworkDetails: MaxConfig.NetworkTemplate[];
  lsnetworkBidders: MaxConfig.NetworkTemplate[];

  bidderNetwork = MaxConfig.bidderNetwork;
  otherNetwork = MaxConfig.otherNetwork;

  tooltipHelper = MaxConfig.tooltipHelper;

  selectedCountry = [];

  countries$: Observable<any[]>;
  groups = CountryCode.groups;

  lsCountry = {
    tier1: CountryCode.country_Tier1,
    eea: CountryCode.country_EEA,
    latam: CountryCode.country_LATAM,
    apac: CountryCode.country_APAC,
    nonEEA: CountryCode.country_nonEEA,
  };

  isFrequencyCapping: boolean = false;
  isBidFloor: boolean = false;
  platform: string;
  adType: string;
  adUnit: string;
  package: string;
  templateSize: string;

  banner_refresh = MaxConfig.banner_refresh;
  interval: number = 0;
  frequencySetting: MaxConfig.frequency_capping_settings[] = [];
  bidFloorSetting: MaxConfig.bid_floor_settings[] = [
    {
      country_group_name: "",
      cpm: 0,
      countries: {
        type: MaxConfig.TypeCounty.INCLUDE,
        value: [],
      },
    },
  ];
  per_session_setting = MaxConfig.per_session_setting;
  per_time_setting = MaxConfig.per_time_setting;

  constructor(private dataService: CountryDataService) {}

  ngOnInit() {
    this.countries$ = this.dataService.getCountry();
  }

  /** add placement  */

  addPlacement(indexNetwork: number, typeNetwork: string) {
    if (typeNetwork === "BIDDER") {
      this.lsnetworkBidders[indexNetwork].ad_network_ad_units.push({
        ad_network_ad_unit_id: "",
        disabled: false,
        cpm: 0,
        countries: {
          type: MaxConfig.TypeCounty.INCLUDE,
          value: [],
        },
      });
    } else {
      this.lsnetworkDetails[indexNetwork].ad_network_ad_units.push({
        ad_network_ad_unit_id: "",
        disabled: false,
        cpm: 0,
        countries: {
          type: MaxConfig.TypeCounty.INCLUDE,
          value: [],
        },
      });
    }
  }

  pausePlacement(index: number, indexNetwork: number, typeNetwork: string) {
    if (typeNetwork === "BIDDER") this.lsnetworkBidders[indexNetwork].ad_network_ad_units[index].disabled = true;
    else this.lsnetworkDetails[indexNetwork].ad_network_ad_units[index].disabled = true;
  }

  unPausePlacement(index: number, indexNetwork: number, typeNetwork: string) {
    if (typeNetwork === "BIDDER") this.lsnetworkBidders[indexNetwork].ad_network_ad_units[index].disabled = false;
    else this.lsnetworkDetails[indexNetwork].ad_network_ad_units[index].disabled = false;
  }

  removePlacement(index: number, indexNetwork: number, typeNetwork: string) {
    if (typeNetwork === "BIDDER") this.lsnetworkBidders[indexNetwork].ad_network_ad_units.splice(index, 1);
    else this.lsnetworkDetails[indexNetwork].ad_network_ad_units.splice(index, 1);
  }

  addFreBidFloor(isFre: boolean, type: MaxConfig.TypeFrequency) {
    if (isFre) {
      this.frequencySetting.push({
        type: type,
        time_capping_settings: {
          day_limit: 0,
          minute_frequency: 0,
        },
        session_capping_settings: { session_capping: 0 },
        countries: {
          type: MaxConfig.TypeCounty.INCLUDE,
          value: [],
        },
      });
    } else {
      this.bidFloorSetting.push({
        country_group_name: "",
        cpm: 0,
        countries: {
          type: MaxConfig.TypeCounty.INCLUDE,
          value: [],
        },
      });
    }
  }

  removeFreBidFloor(isFre: boolean, index: number) {
    if (isFre) {
      this.frequencySetting.splice(index, 1);
    } else this, this.bidFloorSetting.splice(index, 1);
  }

  /** End of placement */

  toggleNetwork(checked: boolean, indexNetWork: number, network: string, typeNetwork: string) {
    this.networks[network] = checked;
    if (typeNetwork === "BIDDER") this.lsnetworkBidders[indexNetWork].disabled = !checked;
    else this.lsnetworkDetails[indexNetWork].disabled = !checked;
  }

  onSelectCountryGroup(val: string, index: number, indexNetWork: number, typeNetwork: string) {
    if (typeNetwork === "BIDDER") {
      this.lsnetworkBidders[indexNetWork].ad_network_ad_units[index].countries.value = [
        ...this.lsnetworkBidders[indexNetWork].ad_network_ad_units[index].countries.value,
        ...mergeArray(this.lsnetworkBidders[indexNetWork].ad_network_ad_units[index].countries.value, this.lsCountry[val]),
      ];
    } else if (typeNetwork === "OTHER") {
      this.lsnetworkDetails[indexNetWork].ad_network_ad_units[index].countries.value = [
        ...this.lsnetworkDetails[indexNetWork].ad_network_ad_units[index].countries.value,
        ...mergeArray(this.lsnetworkDetails[indexNetWork].ad_network_ad_units[index].countries.value, this.lsCountry[val]),
      ];
    }

    console.log(this.lsnetworkDetails[indexNetWork].ad_network_ad_units[index].countries.value);
  }

  onSelectedCountryFre_BidFloor(val: string, index: number, isFre: boolean) {
    if (isFre) {
      this.frequencySetting[index].countries.value = [...this.frequencySetting[index].countries.value, ...mergeArray(this.frequencySetting[index].countries.value, this.lsCountry[val])];
    } else this.bidFloorSetting[index].countries.value = [...this.bidFloorSetting[index].countries.value, ...mergeArray(this.bidFloorSetting[index].countries.value, this.lsCountry[val])];
  }

  getNetwork(listNetwork: MaxConfig.NetworkTemplate[], platform: string, typeAd: string, typeNetwork: string) {
    if (typeNetwork === "OTHER") {
      this.lsnetworkDetails = [];
      listNetwork.forEach((index) => {
        if (index.supportedPlatform) {
          if (index.supportedPlatform.includes(platform)) {
            if (!index.unSupportedAd.includes(typeAd)) {
              this.lsnetworkDetails.push(index);
            }
          }
        }
        if (!index.unSupportedAd.includes(typeAd) && index.supportedPlatform === undefined) {
          this.lsnetworkDetails.push(index);
        }
      });
      return this.lsnetworkDetails;
    } else {
      this.lsnetworkBidders = [];
      listNetwork.forEach((index) => {
        if (index.supportedPlatform) {
          if (index.supportedPlatform.includes(platform)) {
            if (!index.unSupportedAd.includes(typeAd)) {
              this.lsnetworkBidders.push(index);
            }
          }
        }
        if (!index.unSupportedAd.includes(typeAd) && index.supportedPlatform === undefined) {
          this.lsnetworkBidders.push(index);
        }
      });
    }
    return this.lsnetworkBidders;
  }

  /** frequency  */

  changeFrequencyType(type: MaxConfig.TypeFrequency) {
    this.frequencySetting = [
      {
        type: type,
        time_capping_settings: {
          day_limit: 0,
          minute_frequency: 0,
        },
        session_capping_settings: { session_capping: 0 },
        countries: {
          type: MaxConfig.TypeCounty.INCLUDE,
          value: [],
        },
      },
    ];
  }

  /** Submit data changes */

  onClickSubmit(data: any) {
    console.table(data);
    console.log(this.lsnetworkBidders);
    console.log(this.lsnetworkDetails);

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

function mergeArray(arr1: Array<string>, arr2: Array<CountryCode.IOption>) {
  let diffentArray = [];

  arr2.forEach((index) => {
    const checkDuplicate = arr1.some((index2) => index2 === index.value);
    if (!checkDuplicate) {
      diffentArray.push(index.value);
    }
  });
  return diffentArray;
}
