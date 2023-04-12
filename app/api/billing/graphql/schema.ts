import { createSchema } from "graphql-yoga";
import queries from "./queries";

const schema = createSchema({
  typeDefs: `
    type Query {
      subscriptions (page: Int, first: Int, search: String, sortBy: SubscriptionsSortByInput, filterBy: SubscriptionsFilterByInput): SubscriptionConnection
      subscription (id: ID): Subscription
      apps: AppConnection
      companies (search: String): CompanyConnection
      invoiceables (page: Int, first: Int, search: String, sortBy: InvoiceablesSortByInput, filterBy: InvoiceablesFilterByInput): InvoiceableConnection
      invoiceableCount (filterBy: InvoiceableCountFilterByInput): InvoiceableCount
    }
    
    type SubscriptionConnection {
      nodes: [Subscription]
      totalCount: Float
    }
    
    type Subscription {
      id: ID
      serialNumber: String
      companyBrandName: String
      companyName: String
      companyId: String
      app: App,
      mainPackage: SubscribedPackage,
      activeFrom: String
      endAt: String
      status: Int
    }

    type SubscribedPackage {
      id: ID
      name: String
    }
    
    type AppConnection {
      nodes: [App]
    }
    
    type App {
      id: ID
      name: String
      package: String
    }

    type CompanyConnection {
      nodes: [Company]
    }
    
    type Company {
      id: ID
      name: String
    }

    type InvoiceableConnection {
      nodes: [Invoiceable]
      totalCount: Float
    }
    
    type Invoiceable {
      id: ID
      serialNumber: String
      createdAt: String
      activeFrom: String
      endAt: String
      netAmount: Float
      billingType: String
      mrrType: String
      status: Int
      invoices: [Invoice]
      salesOrderId: String
    }

    type Invoice {
      id: ID
      status: Int
      paymentUrl: String
    }

    type InvoiceableCount {
      hasActivation: Float
      noActivation: Float
    }

    input SubscriptionsFilterByInput {
      app: ID
      status: Int
      companyId: [ID]
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

    input InvoiceablesFilterByInput {
      status: Int
      invoiceStatus: Int
      activationDateAvailability: Boolean
      subscriptionId: ID
    }
    
    input InvoiceablesSortByInput {
      serialNumber: Sort
      createdAt: Sort
      activeFrom: Sort
      endAt: Sort
      netAmount: Sort
      billingType: Sort
      mrrType: Sort
      status: Sort
      invoiceStatus: Sort
    }

    input InvoiceableCountFilterByInput {
      subscriptionId: ID
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
