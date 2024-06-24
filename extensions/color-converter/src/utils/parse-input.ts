export const parseInput = (value: string) => {
  if (value[0] === "#") {
    return value.substring(1);
  }

  return value;
};
