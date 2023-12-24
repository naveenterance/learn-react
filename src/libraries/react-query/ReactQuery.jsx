import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const fetchData = async () => {
  // The fetch function returns a Promise
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  // The response.json() method also returns a Promise
  const result = await response.json();
  return result;
};

const Query = () => {
  // useQuery hook takes a unique key and a function for fetching data
  const { data, isLoading, isError } = useQuery("myData", fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <p className="h3">Fetched results</p>
      <p className="h4">{data ? data.setup : "No data available"}</p>
      <p className="h4">{data ? data.punchline : "No data available"}</p>
    </div>
  );
};

const queryClient = new QueryClient();

const ReactQuery = () => (
  <QueryClientProvider client={queryClient}>
    <Query />
    <ReactQueryDevtools /> {/* Optional: DevTools for debugging */}
  </QueryClientProvider>
);

export default ReactQuery;
