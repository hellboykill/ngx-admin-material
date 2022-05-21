export const platforms = [
  { value: "Android", label: "Android" },
  { value: "IOS", label: "IOS" },
  { value: "FireOS", label: "FireOS" },
];

export const adTypes = [
  { value: "Banner", label: "Banner" },
  { value: "Interstitial", label: "Interstitial" },
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
  gooogleAdManger: false,
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
  disabled?: boolean;
  cpm: number;
  countries: Country;
}

export interface ad_network_settings {
  disbled: boolean;
  ad_network_app_id?: string;
  ad_network_app_key?: string;
  ad_network_ad_units: ad_network_ad_units;
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

export const ad_netwok = [];
