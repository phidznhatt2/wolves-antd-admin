import { combineReducers } from "redux";
import { IAppState } from "redux/store/types";
import category from "./categories";

const rootReducer = combineReducers<IAppState>({
  category,
});

export default rootReducer;
