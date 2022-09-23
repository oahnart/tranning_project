/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-01-21 15:03:08
 * @modify date 2022-01-21 15:03:08
 * @desc [description]
 */

import userActions from "./userActions";
import * as searchAction from "./searchAction";
import * as filterLeftMenuAction from "./filterLeftMenuAction";
import * as orderArtAction from "./orderArtAction";
import * as selectAction from "./selectActions";
import getUserAction from "./getUserAction";

const rootAction = {
  userActions,
  searchAction,
  filterLeftMenuAction,
  orderArtAction,
  selectAction,
  getUserAction,
};

export default rootAction;
