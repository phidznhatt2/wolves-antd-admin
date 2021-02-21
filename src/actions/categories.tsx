import uuid from "uuid";
import { AppActions } from "../types/CategoryTypes/action";
import { Category } from "../types/CategoryTypes/ICategory";
import * as CONST from "../types/CategoryTypes/constants";
import { Dispatch } from "redux";
import { AppState } from "../reducers";
import * as apiCategory from "../api/category";

export const getCategories = (categories: Category[]): AppActions => ({
  type: CONST.GET_CATEGORIES,
  categories,
});

export const getCategoryById = (category: Category): AppActions => ({
  type: CONST.GET_CATEGORYBYID,
  category,
});

export const addCategory = (category: Category): AppActions => ({
  type: CONST.ADD_CATEGORY,
  category,
});

export const editCategory = (category: Category): AppActions => ({
  type: CONST.EDIT_CATEGORY,
  category,
});

export const removeCategory = (id: string): AppActions => ({
  type: CONST.REMOVE_CATEGORY,
  id,
});

export const getCateCollection = (category: Category): AppActions => ({
  type: CONST.GET_CATE_COLLECTION,
  category,
});

/* dispatch action */

export const startGetCategories = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    apiCategory
      .getCategoryList()
      .then((res) => dispatch(getCategories(res.data.data)))
      .catch((err) => console.log(err));
  };
};

export const startGetCategoryById = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    apiCategory
      .getCategoryById({ categoryId: id })
      .then((res) => dispatch(getCategoryById(res.data)))
      .catch((err) => console.log(err));
  };
};

export const startAddCategory = (categoryData: {
  title: string;
  description?: string;
}) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const { title, description } = categoryData;
    const category = { title, description };

    apiCategory
      .postCategory(category)
      .then((res) => dispatch(addCategory(res.data)))
      .catch((err) => console.log(err));
  };
};

export const startEditCategory = (category: Category) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    apiCategory
      .editCategory(category)
      .then((res) => dispatch(editCategory(res.data)))
      .catch((err) => console.log(err));
  };
};

export const startRemoveCategory = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    apiCategory
      .deleteCategory({ categoryId: id })
      .then((res) => dispatch(removeCategory(res.data)))
      .catch((err) => console.log(err));
  };
};

export const startGetCateCollectionById = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    apiCategory
      .getCateCollection({ categoryId: id })
      .then((res) => dispatch(getCateCollection(res.data)))
      .catch((err) => console.log(err));
  };
};
