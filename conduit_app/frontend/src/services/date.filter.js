import { default as format } from "date-fns/format";

export default date => {
  return format(new Date(date), "MMMM d, yyyy");
};

// export default ( date, format = "MMMM d, yyyy") => {
//   return format(new Date(date), format);
// };
