const convertHexToRgbValues = (hex: string) => {
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);

  return [red, green, blue];
};

export const convertHexToRgb = (hex: string) => {
  const [red, green, blue] = convertHexToRgbValues(hex);

  const rgb = `rgb(${red}, ${green}, ${blue})`;

  return rgb;
};

export const convertHexToRgba = (hex: string) => {
  const [red, green, blue] = convertHexToRgbValues(hex);

  const rgb = `rgba(${red}, ${green}, ${blue}, 1)`;

  return rgb;
};
