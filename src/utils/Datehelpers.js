// last 7 days of history logic
export const getLastNDays = (history, n = 7) => {
  const dates = Object.keys(history).sort(); // ascending
  const lastDates = dates.slice(-n).reverse(); // latest first

  return lastDates.map((date) => ({
    date,
    habits: history[date],
  }));
};

export const formatdate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
    