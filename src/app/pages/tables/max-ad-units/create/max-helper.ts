export const platforms = [
  { value: "Android", label: "Android" },
  { value: "IOS", label: "IOS" },
  { value: "FireOS", label: "FireOS" },
];

export const adTypes = [
  { value: "Banner", label: "Banner" },
  { value: "Interstitial", label: "Interstitial", checked: true },
  { value: "MREC", label: "MREC" },
  { value: "Native", label: "Native" },
  { value: "Rewarded", label: "Rewarded" },
];

export const templateSizes = [
  { value: "small_template_1", label: "Small" },
  { value: "medium_template_1", label: "Medium" },
  { value: "custom_template_1", label: "Manual" },
];

export const isSelected = [
  { value: false, label: "Off", checked: true },
  { value: true, label: "On" },
];

export const AD_NETWORK = {
  // bidder network
  applovin: false,
  applovin_exchange: false,
  adColony: false,
  meta: false,
  inMobi: false,
  mintegral: false,
  mytarget: false,
  pangle: false,
  smaato: false,
  tapjoy: false,
  verveGroup: false,
  vungle: false,
  yahoo: false,

  // other network
  adMob: false,
  chartBoost: false,
  fyber: false,
  googleAdManger: false,
  hyprMX: false,
  inMobiOther: false,
  ironSource: false,
  line: false,
  maio: false,
  mytargetOther: false,
  nend: false,
  ogugyPresage: false,
  pangleOther: false,
  smaatoOther: false,
  snap: false,
  tecent: false,
  unityAds: false,
  vungleOther: false,
  yandex: false,
  yahooOther: false,
};
// network support: 0: banner, 1: inter, 2: merc, 3: native, 4: reward
export const ads_network_key = [
  /** bidder network */
  "ADCOLONY_NETWORK", // 2 , 0
  "FACEBOOK_NETWORK", // 2, 0
  "FACEBOOK_NATIVE_BIDDING", // 2
  "INMOBI_BIDDING", // 2
  "MINTEGRAL_BIDDING", // 2
  "MYTARGET_BIDDING", // 2
  "TIKTOK_BIDDING", // 2
  "SMAATO_BIDDING", // 2
  "TAPJOY_NETWORK",
  "VERVE_BIDDING", // 2
  "VUNGLE_BIDDING", // 2
  "VERIZON_BIDDING", // 2

  /** other network */
  "ADMOB_NETWORK", // 2
  "ADMOB_NATIVE_NETWORK", // 2
  "CHARTBOOST_NETWORK", // 2
  "FYBER_NETWORK", // 2
  "GOOGLE_AD_MANAGER_NETWORK", // 2
  "GOOGLE_AD_MANAGER_NATIVE_NETWORK", // 2
  "HYPRMX_NETWORK", // 2
  "LINE_NETWORK", // 2
  "LINE_NATIVE_NETWORK", // 2
  "MYTARGET_NETWORK", // 2
  "TIKTOK_NATIVE_NETWORK", // 2
  "SMAATO_NETWORK", // 2
  "TENCENT_NETWORK",
  "VUNGLE_NETWORK", // 2
  "VERIZON_NETWORK", // 2
];

export enum TypeCounty {
  INCLUDE = "INCLUDE",
  EXCLUDE = "EXCLUDE",
}
/* 
Ad Network setting defines
*/

export interface Country {
  type: TypeCounty;
  value: string[];
}
export interface ad_network_ad_units {
  ad_network_ad_unit_id: string;
  disabled: boolean;
  cpm?: number;
  countries?: Country;
}

export interface ad_network_settings {
  disabled: boolean;
  ad_network_app_id?: string;
  ad_network_app_key?: string;
  ad_network_ad_units: ad_network_ad_units[];
}

/* 
Frequency capping define
*/

export enum TypeFrequency {
  time = "time",
  session = "session",
}

export interface TimeCapping {
  day_limit: number;
  minute_frequency: number;
}

export interface frequency_capping_settings {
  type: TypeFrequency;
  time_capping_settings: TimeCapping;
  session_capping_settings: { session_capping: number };
  countries: Country;
}

/* 
Bid Floor define
*/

export interface bid_floor_settings {
  country_group_name: string;
  cpm: number;
  countries: Country;
}

export interface banner_refresh_settings {
  interval: number;
}

export const tooltipHelper = {
  countryTargeting: "MAX country targeting allows you to include or exclude countries. Please make sure to select and apply the desired targeting before you save your changes.",
  platform:
    "To select an application already saved in the AppDiscovery section, please enter the application name. For other live apps in the store, package name or iTunes Store ID should be used. If your app is not live yet, please manually add your package name.",
  bidderNetwork:
    "MAX in-app bidders are SDK based networks that compete to maximize revenue in a real-time auction. Revenue estimated is expected to match the revenue reported by the network partner.",
  otherNetwork:
    "MAX supports real-time SDK based in-app bidders and traditionally mediated SDK networks. Other networks require additional placement IDs and compete with the bidders based on historical averages or the CPM value entered in the ad unit page. Enabling auto-CPM in the Networks page will ensure that estimated revenue in the MAX dashboard will match the revenue reported by the network partner.",
};

export interface NetworkTemplate extends ad_network_settings {
  ad: {
    variable: string;
    name: string;
    value: string;
  };
  unSupportedAd: string[];
  supportedPlatform?: string[];
  appId?: {
    name: string;
    placeholder: string;
    tooltip?: string;
  };
  appKey?: {
    name: string;
    placeholder: string;
    tooltip: string;
  };
  adUnit?: {
    name: string;
    placeholder: string;
    tooltip?: string;
    isShowCountryTargeting?: boolean;
  };
  extraParameters?: {};
}
export const initAdUnit: ad_network_ad_units = {
  disabled: false,
  ad_network_ad_unit_id: "",
  cpm: 0,
  countries: {
    type: TypeCounty.INCLUDE,
    value: [],
  },
};

export const initAdUnitBidderNetwork: ad_network_ad_units = {
  disabled: false,
  ad_network_ad_unit_id: "",
};

export const bidderNetwork: NetworkTemplate[] = [
  {
    disabled: true,
    ad: {
      variable: "adColony",
      name: "AdColony",
      value: "ADCOLONY_NETWORK",
    },
    unSupportedAd: ["NATIVE"],

    ad_network_app_id: "",
    appId: {
      name: "App ID",
      placeholder: "Enter App ID",
      tooltip: "AdColony App ID value that can be found on the Monetization > Apps section of your AdColony account.",
    },
    adUnit: {
      name: "Zone ID",
      placeholder: "Enter Zone ID",
      tooltip: "Unique placement ID associated with the ad zone created.",
    },
    ad_network_ad_units: [initAdUnitBidderNetwork],
  },
  {
    disabled: true,
    ad: {
      variable: "meta",
      name: "Meta",
      value: "FACEBOOK_NETWORK",
    },
    adUnit: {
      name: "Placement ID",
      placeholder: "e.g 436418353000121_491210917953864",
      tooltip: "Unique ad unit placement identifier listed in Meta Monetization Manager page.",
    },
    unSupportedAd: [],
    ad_network_ad_units: [initAdUnitBidderNetwork],
  },
  {
    disabled: true,
    ad: {
      variable: "inMobi",
      name: "InMobi",
      value: "INMOBI_BIDDING",
    },
    adUnit: {
      name: "PlacementID",
      placeholder: "Enter placement ID",
      tooltip: "Your account ID can be found in the top right section of your InMobi dashboard.",
      isShowCountryTargeting: false,
    },
    appId: {
      name: "Account ID",
      placeholder: "Enter account ID",
      tooltip: "Your account ID can be found in the top right section of your InMobi dashboard.",
    },
    ad_network_app_id: "",
    unSupportedAd: ["NATIVE"],
    ad_network_ad_units: [initAdUnitBidderNetwork],
  },
  {
    disabled: true,
    ad: {
      variable: "mintegral",
      name: "Mintegral",
      value: "MINTEGRAL_BIDDING",
    },
    appId: {
      name: "App ID",
      placeholder: "Enter App ID",
      tooltip: "Unique identifier of your app listed under the App Setting > App ID section.",
    },
    appKey: {
      name: "App Key",
      placeholder: "Enter App Key",
      tooltip: "Unique identifier of your app listed under the App Setting > App Key section.",
    },
    adUnit: {
      name: "AD Unit ID",
      placeholder: "e.g 12345",
      tooltip: "Unique identifier for ad space found in the App Setting > Ad Unit ID section.",
    },
    ad_network_app_id: "",
    ad_network_app_key: "",
    unSupportedAd: [],
    ad_network_ad_units: [initAdUnitBidderNetwork],
    extraParameters: {
      ad_network_optional_placement_id: "",
      name: "Placement ID(optional)",
      placeholder: "e.g 12345",
      tooltipHelper: "Unique identifier of your ad placement listed under Placements & Units > Placement ID section",
    },
  },
  {
    disabled: true,
    ad: {
      variable: "mytarget",
      name: "MyTarget",
      value: "MYTARGET_BIDDING",
    },
    adUnit: {
      name: "Slot ID",
      placeholder: "Enter Slot ID",
    },
    unSupportedAd: [],
    ad_network_ad_units: [initAdUnitBidderNetwork],
  },
  {
    disabled: true,
    ad: {
      variable: "pangle",
      name: "Pangle",
      value: "TIKTOK_BIDDING",
    },
    appId: {
      name: "App ID",
      placeholder: "Enter App ID",
      tooltip: "Unique application key found in the Application Management section of your Pangle dashboard.",
    },
    adUnit: {
      name: "Slot ID",
      placeholder: "Enter Slot ID",
      tooltip: "Unique identifier found in the Ad Unit Management section of your Pangle dashboard.",
    },
    ad_network_app_id: "",
    unSupportedAd: [],
    ad_network_ad_units: [initAdUnitBidderNetwork],
  },
  {
    disabled: true,
    ad: {
      variable: "smaato",
      name: "Smaato",
      value: "SMAATO_BIDDING",
    },
    appId: {
      name: "Publisher ID",
      placeholder: "e.g xxxxxxxxxx",
      tooltip: "Unique publisher account value that can be found in the Company Account section of your Smaato account.",
    },
    adUnit: {
      name: "Ad Space ID",
      placeholder: "e.g xxxxxxxxxx",
      tooltip: "Unique placement ID value that can be found on the Inventory section of your Smaato account.",
    },
    ad_network_app_id: "",
    unSupportedAd: [],
    ad_network_ad_units: [initAdUnitBidderNetwork],
  },

  {
    disabled: true,
    ad: {
      variable: "tapjoy",
      name: "Tapjoy",
      value: "TAPJOY_NETWORK",
    },
    appId: {
      name: "SDK Key",
      placeholder: "Enter SDK Key",
      tooltip: "Unique application key found in the App Settings section of your Tapjoy dashboard. The key is different for each platform.",
    },
    adUnit: {
      name: "Placement Name",
      placeholder: "Enter Placement Name",
      tooltip: "Unique ad unit placement name found in the Placements page.",
    },
    ad_network_app_id: "",
    unSupportedAd: [],
    ad_network_ad_units: [initAdUnitBidderNetwork],
  },
  {
    disabled: true,
    ad: {
      variable: "verveGroup",
      name: "Verve Group",
      value: "VERVE_BIDDING",
    },
    appId: {
      name: "App Token",
      placeholder: "Enter App Token",
      tooltip: "Unique App ID assigned by Verve.",
    },
    adUnit: {
      name: "Zone Reference",
      placeholder: "Enter Zone Name",
      tooltip: "Unique App ID assigned by Verve.",
    },
    ad_network_app_id: "",
    unSupportedAd: [],
    ad_network_ad_units: [initAdUnitBidderNetwork],
  },
  {
    disabled: true,
    ad: {
      variable: "vungle",
      name: "Vungle",
      value: "VUNGLE_BIDDING",
    },
    appId: {
      name: "App ID",
      placeholder: "Enter App ID",
      tooltip: "App ID: Unique ID assigned to your app. You can find the ID in the Details view of the app after you create and add it to your Vungle account.",
    },
    adUnit: {
      name: "Zone Reference",
      placeholder: "Enter Zone Name",
      tooltip: "Placement Reference ID: Unique identifier that is generated automatically for each placement found in the Create Placements page.",
    },
    ad_network_app_id: "",
    unSupportedAd: [],
    ad_network_ad_units: [initAdUnitBidderNetwork],
  },
  {
    disabled: true,
    ad: {
      variable: "yahoo",
      name: "Yahoo",
      value: "VERIZON_BIDDING",
    },
    appId: {
      name: "Site ID",
      placeholder: "Enter Site ID",
      tooltip: "Unique identifier for your app listed in your app's Edit section.",
    },
    adUnit: {
      name: "Placement ID",
      placeholder: "Enter Placement ID",
      tooltip: "Unique identifier for each ad space found in your app's Add A Placement section.",
    },
    ad_network_app_id: "",
    unSupportedAd: [],
    ad_network_ad_units: [initAdUnitBidderNetwork],
  },
];

export const otherNetwork: NetworkTemplate[] = [
  {
    ad: {
      variable: "adMob",
      name: "AdMob",
      value: "ADMOB_NETWORK",
    },
    unSupportedAd: [],
    appId: {
      name: "Google App ID",
      placeholder: "e.g ca-app-pub-xxxxxxxxxxxxxxxx~xxxxxxxxxxx",
      tooltip: "The unique ID assigned to your app. You will need to integrate the app ID into your app's source code to use certain features in AdMob.",
    },
    adUnit: {
      name: "Ad Unit ID",
      placeholder: "e.g ca-app-pub-xxxxxxxxxxxxxxxx~xxxxxxxxxxx",
      tooltip: "The unique AdMob identifier found in the Ad Unit section of your Google AdMob account for this app.",
      isShowCountryTargeting: true,
    },
    disabled: true,
    ad_network_app_id: "",
    ad_network_ad_units: [
      {
        ad_network_ad_unit_id: "",
        disabled: false,
        cpm: 0,
        countries: {
          type: TypeCounty.INCLUDE,
          value: [],
        },
      },
    ],
  },
  {
    ad: {
      variable: "chartBoost",
      name: "Chartboost",
      value: "CHARTBOOST_NETWORK",
    },
    unSupportedAd: ["Native"],
    appId: {
      name: "App ID",
      placeholder: "Enter App Id",
      tooltip: "Unique identifier of your app listed under the App Settings > Basic Settings section.",
    },
    appKey: {
      name: "Ad Signature",
      placeholder: "Enter App Signature",
      tooltip: "Unique identifier of your app listed under the App Settings > Basic Settings section.",
    },
    adUnit: {
      name: "Ad Location",
      placeholder: "e.g 12345",
      tooltip: "Unique ad unit placement name representing a place in your app where you want to show an ad. It’s listed under App Settings > Basic Settings > Advanced Settings section.",
      isShowCountryTargeting: true,
    },
    disabled: true,
    ad_network_app_id: "",
    ad_network_app_key: "",
    ad_network_ad_units: [initAdUnit],
  },
  {
    ad: {
      variable: "googleAdManger",
      name: "Google Ad Manager",
      value: "GOOGLE_AD_MANAGER_NETWORK",
    },
    unSupportedAd: [],
    adUnit: {
      name: "Placement ID",
      placeholder: "e.g 12345",
      tooltip: "Unique ad unit identifier found in the Inventory Ad unit section.",
      isShowCountryTargeting: true,
    },
    disabled: true,
    ad_network_ad_units: [initAdUnit],
  },
  {
    ad: {
      variable: "line",
      name: "LINE",
      value: "LINE_NETWORK",
    },
    unSupportedAd: [],
    appId: {
      name: "App ID",
      placeholder: "Enter App Id",
      tooltip: "Unique identifier of your app listed under the App Settings > Basic Settings section.",
    },
    adUnit: {
      name: "Slot ID",
      placeholder: "e.g 12345",
      tooltip: "Slot ID: The unique identifier found in the app page.",
      isShowCountryTargeting: false,
    },
    disabled: true,
    ad_network_app_id: "",
    ad_network_ad_units: [initAdUnit],
  },
  {
    ad: {
      variable: "tecent",
      name: "Tecent",
      value: "TECENT_NETWORK",
    },
    supportedPlatform: ["IOS"],
    unSupportedAd: ["MREC", "Native"],
    appId: {
      name: "App ID",
      placeholder: "e.g 10018",
      tooltip: " Unique app value that can be found in the App section of your Tencent account.",
    },
    adUnit: {
      name: "Ad Slot ID",
      placeholder: "e.g 19009",
      tooltip: "Unique placement ID value that can be found on the Inventory section of your Tencent account under the app created.",
      isShowCountryTargeting: false,
    },
    disabled: true,
    ad_network_app_id: "",
    ad_network_ad_units: [initAdUnit],
  },
];
