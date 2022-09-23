/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-01-21 15:03:15
 * @modify date 2022-01-21 15:03:15
 * @desc [description]
 */

import { combineReducers } from "redux";
import popupReducer from "./popupReducer";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import filterLeftMenuReducer from "./filterLeftMenuReducer";
import orderArtReducer from "./orderArtReducer";
import selectReducer from "./selectReducer";
import getUserReducer from "./getUserReducer";

export default combineReducers({
  popup: popupReducer,
  user: userReducer,
  searchBar: searchReducer,
  filterLeftMenu: filterLeftMenuReducer,
  artOrder: orderArtReducer,
  selectBar: selectReducer,
  dataUser: getUserReducer,
});
