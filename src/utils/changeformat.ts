export function changeFormat(value: number, lastDigit: boolean = true) {
  const intValue = Math.floor(value);
  const fractionalValue = (value - intValue).toFixed(2);
  
  const formattedIntValue = intValue.toLocaleString("en-US");
  
  if (!lastDigit && fractionalValue === "0.00") {
    return `${formattedIntValue}`;
  }
  
  return `${formattedIntValue}.${fractionalValue.split(".")[1]}`;
}
