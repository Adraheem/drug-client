import React from 'react';
import {QueryClientProvider, QueryClient} from "react-query";
import DrugPage from "./page/DrugPage";

interface IProps {
}

function App(props: IProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <DrugPage/>
    </QueryClientProvider>
  );
}

export default App;
