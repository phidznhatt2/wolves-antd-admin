import uuid from "uuid";
import { Category } from "../types/CategoryTypes/Category";
import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  AppActions,
  REMOVE_CATEGORY,
  EDIT_CATEGORY,
  SET_CATEGORIES,
} from "../types/CategoryTypes/action";
import { Dispatch } from "redux";
import { AppState } from "../reducers";
import axios from "axios";

export const getCategories = (categories: Category[]): AppActions => ({
  type: GET_CATEGORIES,
  categories,
});

export const addCategory = (category: Category): AppActions => ({
  type: ADD_CATEGORY,
  category,
});

export const removeCategory = (id: string): AppActions => ({
  type: REMOVE_CATEGORY,
  id,
});

export const editCategory = (category: Category): AppActions => ({
  type: EDIT_CATEGORY,
  category,
});

export const setCategories = (categories: Category[]): AppActions => ({
  type: SET_CATEGORIES,
  categories,
});

/* export const startAddCategory = (categoryData: {
  id: string;
  name: string;
  description?: string;
  createdAt?: number;
}) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const { name = "", description = "", createdAt = 0 } = categoryData;
    const category = { name, description, createdAt };

    const id = uuid();

    return dispatch(
      addCategory({
        id,
        ...category,
      })
    );
  };
};
 */

export const startGetCategories = () => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    axios.get(`https://twp-api.herokuapp.com/api/categories`).then((res) => {
      dispatch(getCategories(res.data));
    });
  };
};

export const startRemoveCategory = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeCategory(id));
  };
};

export const startEditCategory = (category: Category) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(editCategory(category));
  };
};

export const startSetCategories = (categories: Category[]) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setCategories(categories));
  };
};
