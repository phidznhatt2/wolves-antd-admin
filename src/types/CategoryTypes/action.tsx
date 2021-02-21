import { Category } from "./Category";

// action strings
export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const GET_CATEGORIES = "GET_CATEGORIES";

export interface GETCategoryAction {
  type: typeof GET_CATEGORIES;
  categories: Category[];
}

export interface SetCategoryAction {
  type: typeof SET_CATEGORIES;
  categories: Category[];
}

export interface EditCategoryAction {
  type: typeof EDIT_CATEGORY;
  category: Category;
}

export interface RemoveCategoryAction {
  type: typeof REMOVE_CATEGORY;
  id: string;
}

export interface AddCategoryAction {
  type: typeof ADD_CATEGORY;
  category: Category;
}

export type CategoryActionTypes =
  | GETCategoryAction
  | SetCategoryAction
  | EditCategoryAction
  | RemoveCategoryAction
  | AddCategoryAction;

export type AppActions = CategoryActionTypes;
