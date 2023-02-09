// THIRD-PARTY IMPORTS
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// PROJECT IMPORTS
import menuReducer from "~/store/slices/menu";

const reducer = combineReducers({
  menu: menuReducer,
});

export default reducer;
