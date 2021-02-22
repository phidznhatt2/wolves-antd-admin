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
      .then((res: any) => {
        const categoryList = res.data.data.map((item: any) => {
          return {
            id: item.id,
            title: item.attributes.title,
            description: item.attributes.description,
            createTime: item.meta.createdAt,
          };
        });
        dispatch({ type, payload: categoryList });
      })
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

const createActionAddCategory = (type: string) => {
  return (payload?: any) => (dispatch: Dispatch) => {
    apiCategory
      .postCategory(payload)
      .then((res: any) => dispatch({ type, payload: res.data }))
      .catch((err: any) => console.log(err));
  };
};

const createActionEditCategory = (type: string) => {
  return (payload?: any) => (dispatch: Dispatch) => {
    apiCategory
      .editCategory(payload)
      .then((res: any) => dispatch({ type, payload: res.data }))
      .catch((err: any) => console.log(err));
  };
};

const createActionRemoveCategory = (type: string) => {
  return (payload?: any) => (dispatch: Dispatch) => {
    apiCategory
      .deleteCategory(payload)
      .then((res: any) => dispatch({ type, payload: res.data }))
      .catch((err: any) => console.log(err));
  };
};

const createActionGetCollection = (type: string) => {
  return (payload?: any) => (dispatch: Dispatch) => {
    apiCategory
      .getCateCollection(payload)
      .then((res: any) => dispatch({ type, payload: res.data }))
      .catch((err: any) => console.log(err));
  };
};

//category
export const getCategories = createActionGetCategories(GET_CATEGORIES);
export const getCategory = createActionGetCategory(GET_CATEGORY);
export const addCategory = createActionAddCategory(ADD_CATEGORY);
export const editCategory = createActionEditCategory(EDIT_CATEGORY);
export const removeCategory = createActionRemoveCategory(REMOVE_CATEGORY);
export const getCateCollection = createActionGetCollection(GET_CATE_COLLECTION);
