export default (dateString) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
