export function changeCurrencyFormat(value?: number) {
  const intValue = Math.floor(value ?? 0);
  const formatted = new Intl.NumberFormat("en-LK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(intValue);

  return `Rs. ${formatted}`;
}