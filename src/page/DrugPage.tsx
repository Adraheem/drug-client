import React from 'react';
import {useQuery} from "react-query";
import drugService from "../services/drugService";
import {Drug, Page} from "../types/drug";
import NewDrug from "./newDrug";

interface IProps {
}

function DrugPage(props: IProps) {
  const {data, isLoading} = useQuery<Page<Drug>>("drugs", drugService.getAllDrugs);

  return (
    <div>
      <NewDrug/>

      {
        isLoading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <ul>
              {data?.content.map((drug) => (
                <li key={drug.id}>{drug.name} - {drug.brand}</li>
              ))}
            </ul>
          </div>
        )
      }
    </div>
  );
}

export default DrugPage;
