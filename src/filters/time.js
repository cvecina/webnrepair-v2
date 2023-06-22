import moment from "moment";
const d = (value) => {
  const ned = new Date(value);
  return moment(ned).format("DD/MM/YYYY");
};
export const time = (value) => (!value ? "" : d(value));
