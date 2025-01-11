export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatPercentage = (value) => {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
};
