import { Injectable } from "@angular/core";
import { MaxTableData, MaxAdUnit } from "../data/max-table";
import axios from "axios";

@Injectable()
export class MaxTableService implements MaxTableData {
  getData(): Promise<any[]> {
    const adUnit = new Promise<any[]>((resolve, rejects) => {
      axios
        .get("http://localhost:3333/max/ad_units")
        .then(async (response) => {
          let listAdsRaw = response.data.Body;
          let listAdsReponse: MaxAdUnit[] = [];
          for await (const data of listAdsRaw) {
            const unit: MaxAdUnit = {
              application: data.package_name,
              adsUnit: data.name,
              adsId: data.id,
              adsType: data.ad_format,
              status: data.disabled === false ? true : false,
              platform: data.platform,
            };
            listAdsReponse.push(unit);
          }
          console.table(listAdsReponse);
          resolve(listAdsReponse);
        })
        .catch((err) => {
          console.log(err);
          rejects([]);
        });
    });
    return adUnit;
  }

  getMaxDetails(id: number | string) {}
}
