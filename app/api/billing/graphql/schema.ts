import { createSchema } from "graphql-yoga";
import queries from "./queries";

const schema = createSchema({
  typeDefs: `
    type Query {
      subscriptions (page: Int, first: Int, search: String, sortBy: DashboardSubscriptionsSortByInput, filterBy: DashboardSubscriptionsFilterByInput): DashboardSubscriptionConnection
      subscription (id: Int): DashboardSubscription
      apps: AppConnection
      companies (search: String): CompanyConnection
      invoiceables (page: Int, first: Int, search: String, sortBy: InvoiceablesSortByInput, filterBy: InvoiceablesFilterByInput): InvoiceableConnection
    }
    
    type DashboardSubscriptionConnection {
      nodes: [DashboardSubscription]
      totalCount: Int
    }
    
    type DashboardSubscription {
      id: Int
      serialNumber: String
      companyBrandName: String
      companyName: String
      companyId: String
      appId: Int,
      appName: String,
      packageName: String,
      activeFrom: String
      endAt: String
      status: Int
    }
    
    type AppConnection {
      nodes: [App]
    }
    
    type App {
      id: Int
      name: String
      package: String
    }

    type CompanyConnection {
      nodes: [Company]
    }
    
    type Company {
      id: Int
      name: String
    }

    type InvoiceableConnection {
      nodes: [Invoiceable]
      totalCount: Int
    }
    
    type Invoiceable {
      id: Int
      serialNumber: String
      createdAt: String
      activeFrom: String
      endAt: String
      netAmount: Float
      billingType: String
      mrrType: String
      status: Int
      invoices: [Invoice]
      salesOrderId: Int
    }

    type Invoice {
      id: Int
      status: Int
      paymentUrl: String
    }

    input DashboardSubscriptionsFilterByInput {
      app: Int
      status: Int
      companyId: [String]
      activationDateAvailability: Boolean
      activeDate: DateRangeInput
      endDate: DateRangeInput
      paymentDate: DateRangeInput
    }

    input DashboardSubscriptionsSortByInput {
      serialNumber: Sort
      companyName: Sort
      appName: Sort
      activeFrom: Sort
      endAt: Sort
      status: Sort
    }

    input InvoiceablesFilterByInput {
      status: Int
      activationDateAvailability: Boolean
    }
    
    input InvoiceablesSortByInput {
      serialNumber: Sort
      createdAt: Sort
      activeFrom: Sort
      endAt: Sort
      netAmount: Sort
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
