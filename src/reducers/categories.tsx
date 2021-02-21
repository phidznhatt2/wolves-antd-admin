import { Category } from "../types/CategoryTypes/ICategory";
import * as CONST from "../types/CategoryTypes/constants";
import { CategoryActionTypes } from "../types/CategoryTypes/action";

const categoriesReducerDefaultState: Category[] = [];

const categoryReducer = (
  state = categoriesReducerDefaultState,
  action: CategoryActionTypes
): Category[] => {
  switch (action.type) {
    case CONST.ADD_CATEGORY:
      return [...state, action.category];
    case CONST.REMOVE_CATEGORY:
      return state.filter(({ id }) => id !== action.id);
    case CONST.EDIT_CATEGORY:
      return state.map((category) => {
        if (category.id === action.category.id) {
          return {
            ...category,
            ...action.category,
          };
        } else {
          return category;
        }
      });
    case CONST.GET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export { categoryReducer };
