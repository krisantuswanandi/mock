import { createSchema } from "graphql-yoga";

const typeDefs = `
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    users() {
      return [{ name: "Nextjs" }];
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

export default schema;
