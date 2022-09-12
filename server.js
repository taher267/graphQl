import { config } from 'dotenv';
config({ path: './config/.env' });
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import { createServer } from 'http';
import typeDefs from './typedefs/typeDefs.js';
import resolvers from './resolvers/resolvers.js';
import { ApolloServer } from 'apollo-server-express';
const app = express();
const PORT = 2006;
(async () => {
  const httpServer = createServer(app);
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      //   ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  //   console.log(expressPlayground.default);
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  httpServer.listen({ port: PORT }, (e) =>
    console.log(`🚀  Server ready at ${PORT}`)
  );
})();
