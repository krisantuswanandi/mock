import data from "@/data/subscriptions.json";

const subscriptions = (
  _: any,
  { page = 1, first = 10, search, sort, application, status }: any
) => {
  let nodes = data;
  let totalCount = 0;

  // sort
  if (sort) {
    const [sortBy, sortDir] = sort.split(".");

    if (sortBy === "id") {
      nodes.sort((a, b) => {
        if (a.serialNumber < b.serialNumber) {
          return sortDir === "asc" ? -1 : 1;
        }
        if (a.serialNumber > b.serialNumber) {
          return sortDir === "asc" ? 1 : -1;
        }
        return 0;
      });
    } else if (sortBy === "company") {
      nodes.sort((a, b) => {
        if (a.companyName < b.companyName) {
          return sortDir === "asc" ? -1 : 1;
        }
        if (a.companyName > b.companyName) {
          return sortDir === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
  }

  // filter
  if (status) {
    nodes = nodes.filter((n) => n.status === status);
  }

  if (application) {
    nodes = nodes.filter((n) => n.app.id === application);
  }

  // search
  if (search) {
    nodes = nodes.filter((n) => {
      return n.companyName.toLowerCase().includes(search.toLowerCase());
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
