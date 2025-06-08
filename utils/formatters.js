export function toCamelCase(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

export function convertKeysToCamelCase(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(convertKeysToCamelCase);

  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[toCamelCase(key)] = convertKeysToCamelCase(value);
    return acc;
  }, {});
}

export function formatCurrency(value, locale = 'en-US', currency = 'IQD') {
  if (!value) return '0';

  const number = Number(value);
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(number);
}
