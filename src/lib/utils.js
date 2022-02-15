// format function
export const formatNumber = (value, len = 2) => {
  let trg = value.toString();
  while (trg.length < len) {
    trg = "0" + trg;
  }
  return trg;
};
