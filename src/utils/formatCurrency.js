function formatCurrency(number) {
  const currency = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return currency;
}

export { formatCurrency };
