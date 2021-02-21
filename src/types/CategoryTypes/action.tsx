import { Category } from "./ICategory";
import * as CONST from "./constants";

export interface GetCategoryAction {
  type: typeof CONST.GET_CATEGORIES;
  categories: Category[];
}

export interface GetCategoryByIdAction {
  type: typeof CONST.GET_CATEGORYBYID;
  category: Category;
}

export interface AddCategoryAction {
  type: typeof CONST.ADD_CATEGORY;
  category: Category;
}

export interface EditCategoryAction {
  type: typeof CONST.EDIT_CATEGORY;
  category: Category;
}

export interface RemoveCategoryAction {
  type: typeof CONST.REMOVE_CATEGORY;
  id: string;
}

export interface GetCateCollectionAction {
  type: typeof CONST.GET_CATE_COLLECTION;
  category: Category;
}

export type CategoryActionTypes =
  | GetCategoryAction
  | GetCategoryByIdAction
  | AddCategoryAction
  | EditCategoryAction
  | RemoveCategoryAction
  | GetCateCollectionAction;

export type AppActions = CategoryActionTypes;
