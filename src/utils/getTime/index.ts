/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-02-17 17:42:29
 * @modify date 2022-02-17 17:42:29
 * @desc [description]
 */

import moment from "moment";

function getTimeRemaning(startAt: any, endAt: any) {
  let a = moment(startAt, "YYYYMMDD");
  let b = moment(endAt, "YYYYMMDD");
  const remingTime = b.diff(a, "days");
  if (remingTime < 0 || isNaN(remingTime)) return 0;
  return remingTime;
}

export { getTimeRemaning };
