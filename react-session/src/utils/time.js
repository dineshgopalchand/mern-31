function formattedDate(dateVal = new Date()) {
  const dateValue = new Date(dateVal);
  const year = dateValue.getFullYear();
  const month = dateValue.getMonth();
  const date = dateValue.getDate();
  const hour = dateValue.getHours();
  const minute = dateValue.getMinutes();
  const second = dateValue.getSeconds();
  return `${date.toString().padStart(2, 0)}/${(month + 1)
    .toString()
    .padStart(2, 0)}/${year} ${hour.toString().padStart(2, 0)}:${minute
    .toString()
    .padStart(2, 0)}:${second.toString().padStart(2, 0)}`;
}
export { formattedDate };
