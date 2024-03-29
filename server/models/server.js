import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "@apollo/server-plugin-landing-page-graphql-playground";

import dbConnection from "../database/config.js";
import { typeDefs, resolvers } from "../data/index.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;

    this.conectarBD();

    this.Middlewares();
    this.GraphQL();
  }

  async conectarBD() {
    await dbConnection();
  }

  Middlewares() {
    this.app.use(
      cors({
        origin: process.env.ORIGIN,
        credentials: true,
      })
    );
  }

  async GraphQL() {


    this.server = new ApolloServer({
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
      typeDefs,
      resolvers,
    });
  }

  async start() {
    await this.server.start();
    this.server.applyMiddleware({ app: this.app });
    this.app.listen(this.port, () =>
      console.log(
        `Servidor funcionando en http://localhost:${this.port}/graphql`
      )
    );
  }
}

export default Server;
