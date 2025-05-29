import months from "../../data/months";

export function clearParams(paramsObj) {
  const arr = [];
  for (const [key, value] of Object.entries(paramsObj)) {
    if (value.length === 0) arr.push(key);
  }
  arr.forEach((key) => delete paramsObj[key]);
  return paramsObj;
}

export function getFormattedDate(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const isSameMonth = startDate.getMonth() === endDate.getMonth();
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  return `${startDay < 10 ? `0${startDay}` : startDay} ${
    isSameMonth ? "" : months[startDate.getMonth()]
  } - ${endDay < 10 ? `0${endDay}` : endDay} ${
    months[endDate.getMonth()]
  } ${startDate.getFullYear()}`;
}
