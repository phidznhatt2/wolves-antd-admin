import { Dispatch } from "redux";
import * as apiCategory from "api/category";
import {
  GET_CATEGORIES,
  GET_CATEGORY,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  REMOVE_CATEGORY,
  GET_CATE_COLLECTION,
} from "constant";

const createActionGetCategories = (type: string) => {
  return (payload?: any) => (dispatch: Dispatch) => {
    apiCategory
      .getCategoryList()
      .then((res: any) => dispatch({ type, payload: res.data }))
      .catch((err: any) => console.log(err));
  };
};
const createActionGetCategory = (type: string) => {
  return (payload?: any) => (dispatch: Dispatch) => {
    apiCategory
      .getCategoryById(payload)
      .then((res: any) => dispatch({ type, payload: res.data }))
      .catch((err: any) => console.log(err));
  };
};

//category
export const getCategories = createActionGetCategories(GET_CATEGORIES);
export const getCategory = createActionGetCategory(GET_CATEGORY);
/* export const addCategory = createActionCreator(ADD_CATEGORY);
export const editCategory = createActionCreator(EDIT_CATEGORY);
export const removeCategory = createActionCreator(REMOVE_CATEGORY);
export const getCateCollection = createActionCreator(GET_CATE_COLLECTION); */
