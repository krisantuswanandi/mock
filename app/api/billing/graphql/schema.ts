import { createSchema } from "graphql-yoga";
import queries from "./queries";

const schema = createSchema({
  typeDefs: `
    type Query {
      subscriptions (page: Int, first: Int, search: String, sortBy: SubscriptionsSortByInput, filterBy: SubscriptionsFilterByInput): SubscriptionNodes
      subscription (id: Int): Subscription
      apps: AppNodes
      companies (search: String): CompanyNodes
    }
    
    type SubscriptionNodes {
      nodes: [Subscription]
      totalCount: Int
    }
    
    type Subscription {
      id: Int
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
      id: Int
      name: String
      package: String
    }

    type CompanyNodes {
      nodes: [Company]
    }
    
    type Company {
      id: Int
      name: String
    }

    input SubscriptionsFilterByInput {
      app: Int
      status: String
      companyId: [String]
      companyName: [String]
      activationDateAvailability: Boolean
      activeDate: DateRangeInput
      endDate: DateRangeInput
      paymentDate: DateRangeInput
    }

    input SubscriptionsSortByInput {
      serialNumber: Sort
      companyName: Sort
      appName: Sort
      activeFrom: Sort
      endAt: Sort
      status: Sort
    }

    input DateRangeInput {
      start: String
      end: String
    }

    enum Sort {
      ASC
      DESC
    }
  `,
  resolvers: {
    Query: queries,
  },
});

export default schema;
