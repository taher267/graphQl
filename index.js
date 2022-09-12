import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import resolvers from './resolvers/resolvers.js';
import typeDefs from './typedefs/typeDefs.js';
import contexts from './context/contexts.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: contexts,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
