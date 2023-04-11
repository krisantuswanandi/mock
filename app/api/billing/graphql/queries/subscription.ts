import data from "@/data/subscriptions.json";

const subscription = (_: any, { id }: any) => {
  return data.find((d) => d.id.toString() === id);
};

export default subscription;
