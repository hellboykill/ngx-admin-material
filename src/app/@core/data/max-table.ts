export abstract class MaxTableData {
  abstract getData(): Promise<any[]>;
}

export interface MaxAdUnit {
  application: string;
  adsUnit: string;
  adsId: string;
  adsType: string;
  status: boolean;
  platform: string;
}
