import data from "@/data/subscriptions.json";

const subscription = (_: any, { id }: any) => {
  return data.find((d) => d.id === id);
};

export default subscription;
