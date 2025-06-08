export function getDiscountPercentage(value, originalValue) {
  const v = Number(value);
  const o = Number(originalValue);
  if (!o || v >= o) return 0;

  return Math.floor(((o - v) / o) * 100);
}
