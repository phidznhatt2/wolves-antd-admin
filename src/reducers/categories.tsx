import { Category } from "../types/CategoryTypes/Category";
import {
  CategoryActionTypes,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  EDIT_CATEGORY,
  SET_CATEGORIES,
  GET_CATEGORIES,
} from "../types/CategoryTypes/action";

const categoriesReducerDefaultState: Category[] = [];

const categoryReducer = (
  state = categoriesReducerDefaultState,
  action: CategoryActionTypes
): Category[] => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.category];
    case REMOVE_CATEGORY:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_CATEGORY:
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
    case GET_CATEGORIES:
      return action.categories;
    case SET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export { categoryReducer };
