import {Drug, Page} from "../types/drug";
import apiInstance from "./api";
import {AxiosResponse} from "axios";

class DrugService {
  public createdrug(data: Drug): Promise<Drug> {
    return new Promise((resolve, reject) => {
      apiInstance.post("/drug", data)
        .then((res: AxiosResponse<Drug>) => {
          resolve(res.data);
        })
        .catch(err => reject(err))
    })
  }

  public getAllDrugs(): Promise<Page<Drug>> {
    return new Promise((resolve, reject) => {
      apiInstance.get("/drug")
        .then((res: AxiosResponse<Page<Drug>>) => {
          resolve(res.data);
        })
        .catch(err => reject(err))
    })
  }
}

const drugService = new DrugService();
export default drugService;
