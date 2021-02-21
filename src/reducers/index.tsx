import { combineReducers } from "redux";
import { categoryReducer } from "./categories";

const rootReducer = combineReducers({
  categories: categoryReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
