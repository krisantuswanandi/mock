import data from "@/data/invoiceables.json";

const invoiceables = (
  _: any,
  { page = 1, first = 10, search = "", sortBy = {}, filterBy = {} }: any
) => {
  let nodes = [...data];
  let totalCount = 0;

  // sort
  if (sortBy) {
    Object.keys(sortBy).forEach((id) => {
      if (id !== "appName") {
        type RawAttr = keyof (typeof nodes)[number];
        type Attr = Exclude<RawAttr, "invoices">;

        const attr = id as Attr;
        const dir = sortBy[id] === "ASC" ? -1 : 1;

        nodes.sort((a, b) => {
          if (a[attr] < b[attr]) {
            return 1 * dir;
          } else if (a[attr] > b[attr]) {
            return -1 * dir;
          } else {
            return 0;
          }
        });
      }
    });
  }

  // filter
  if (filterBy.activationDateAvailability) {
    nodes = nodes.filter((n) => n.activeFrom !== "");
  } else {
    nodes = nodes.filter((n) => n.activeFrom === "");
  }

  if (filterBy.status) {
    nodes = nodes.filter((n) => n.status === filterBy.status);
  }

  if (filterBy.invoiceStatus) {
    nodes = nodes.filter((n) => {
      if (!n.invoices || !n.invoices.length) return false;

      return n?.invoices[0].status === filterBy.invoiceStatus;
    });
  }

  // search
  if (search) {
    nodes = nodes.filter((n) => {
      return n.serialNumber.toLowerCase().includes(search.toLowerCase());
    });
  }

  // count
  totalCount = nodes.length;

  // page
  const start = (page - 1) * first;
  const end = start + first;
  nodes = nodes.slice(start, end);

  return {
    nodes,
    totalCount,
  };
};

export default invoiceables;
