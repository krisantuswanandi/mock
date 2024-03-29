import data from "@/data/subscriptions.json";

const subscriptions = (
  _: any,
  { page = 1, first = 10, search = "", sortBy = {}, filterBy = {} }: any
) => {
  let nodes = [...data];
  let totalCount = 0;

  // sort
  sortBy &&
    Object.keys(sortBy).forEach((id) => {
      const attr = id as keyof (typeof nodes)[number];
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
    });

  // filter
  if (filterBy.app) {
    nodes = nodes.filter((n) => n.app.id.toString() === filterBy.app);
  }

  if (filterBy.status !== null) {
    nodes = nodes.filter((n) => n.status === filterBy.status);
  }

  if (filterBy.companyId?.length) {
    nodes = nodes.filter((n) =>
      filterBy.companyId.includes(n.companyId.toString())
    );
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

export default subscriptions;
