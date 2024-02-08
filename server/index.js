import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";
import cors from "cors";
import dotenv from "dotenv";
import { typeDefs, resolvers } from "./mergeSchema.js";

dotenv.config({ path: "variables.env" });
const port = process.env.PORT || 4000;

const startServer = async () => {
  const app = express();
  app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    })
  );

  const server = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port }, () =>
    console.log(`Servidor funcionando en http://localhost:${port}/graphql`)
  );
};

startServer();
