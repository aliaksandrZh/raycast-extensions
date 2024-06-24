export const validateHexColor = (color: string) => {
  if (color.length > 6) {
    return "The length is exceeded";
  }
  const p = /^[a-zA-Z0-9]{6}$/;

  return p.test(color) ? "" : "Invalid hex color format";
};
