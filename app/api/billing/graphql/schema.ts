import { createSchema } from "graphql-yoga";
import queries from "./queries";

const schema = createSchema({
  typeDefs: `
    type Query {
      subscriptions (page: Int, first: Int, search: String, sort: String, application: String, status: String, company: String, activation: String, activeDate: String, endDate: String, paymentDate: String): SubscriptionNodes
      subscription (id: String): Subscription
      apps: AppNodes
    }
    
    type SubscriptionNodes {
      nodes: [Subscription]
      totalCount: Int
    }
    
    type Subscription {
      id: String
      serialNumber: String
      companyBrandName: String
      companyName: String
      companyId: String
      app: App,
      activeFrom: String
      endAt: String
      status: String
    }
    
    type AppNodes {
      nodes: [App]
    }
    
    type App {
      id: String
      name: String
      type: String
    }
  `,
  resolvers: {
    Query: queries,
  },
});

export default schema;
