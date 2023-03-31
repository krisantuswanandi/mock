import data from "@/data/companies.json";

const companies = (_: any, { search }: any) => {
  let nodes = data;

  if (search) {
    nodes = nodes.filter((n) => {
      return n.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  nodes = nodes.slice(0, 10);

  return {
    nodes,
  };
};

export default companies;
