export function FormatDate(strDate) {
  const date = new Date(strDate);
  const formater = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return formater.format(date);
}
