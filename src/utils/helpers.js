export function clearParams(paramsObj) {
  const arr = [];
  for (const [key, value] of Object.entries(paramsObj)) {
    if (value.length === 0) arr.push(key);
  }
  arr.forEach((key) => delete paramsObj[key]);
  return paramsObj;
}
