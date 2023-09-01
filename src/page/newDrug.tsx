import React, {useState} from 'react';
import {Drug} from "../types/drug";
import {useMutation, useQueryClient} from "react-query";
import drugService from "../services/drugService";

interface IProps {
}

function NewDrug(props: IProps) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState<"ACTIVE" | "DISABLED">("ACTIVE");
  const queryClient = useQueryClient();
  const {mutate, isLoading, status: requestStatus} = useMutation(drugService.createdrug, {
    onSuccess() {
      queryClient.invalidateQueries("drugs");
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && brand && status) {
      const data: Drug = {
        name, brand, status
      }
      await mutate(data);
      setName("")
      setBrand("")
      setStatus("ACTIVE")
    } else {
      alert("Incomplete form")
    }
  }

  return (
    <div>
      <h3>Create new drug</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label><br/>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="brand">Brand</label><br/>
          <input id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="status">Status</label><br/>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value as any)}>
            <option value="ACTIVE">Active</option>
            <option value="DISABLED">Disabled</option>
          </select>
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewDrug;
