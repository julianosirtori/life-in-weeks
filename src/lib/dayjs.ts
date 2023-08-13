import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

//get the difference between two dates and return the result in weeks
export const getNumberOfWeeks = (date: string) => {
  return dayjs.duration(dayjs().diff(dayjs(date))).weeks();
};

export default dayjs;
