/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-01-21 14:58:28
 * @modify date 2022-01-21 14:58:28
 * @desc [description]
 */

import types from "./types";

export const filterLeftMenu = (payload: any) => ({
  type: types.FILTER_ON_LEFT_MENU,
  payload,
});
