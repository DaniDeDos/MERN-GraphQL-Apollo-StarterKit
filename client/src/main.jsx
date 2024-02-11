import React from "react";
import * as ReactDOM from "react-dom/client";
import RootSession from "./App.jsx";
import "./index.css";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:7200/graphql",
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: httpLink,
  fetchOptions: {
    credentials: "include",
  },
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphqlErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RootSession />
    </ApolloProvider>
  </React.StrictMode>
);
