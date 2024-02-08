import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    getSaludo: String
  }
`;

export default typeDefs;
