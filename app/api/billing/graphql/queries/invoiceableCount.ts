import data from "@/data/invoiceables.json";

const invoiceableCount = () => {
  const hasActivation = data.filter((d) => d.activeFrom !== "").length;
  const noActivation = data.filter((d) => d.activeFrom === "").length;

  return {
    hasActivation,
    noActivation,
  };
};

export default invoiceableCount;
