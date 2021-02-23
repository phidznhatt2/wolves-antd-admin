import { IAction } from "interfaces";
import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR, GET_CATEGORY, ADD_CATEGORY, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_ERROR, EDIT_CATEGORY, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_ERROR, REMOVE_CATEGORY, REMOVE_CATEGORY_SUCCESS, REMOVE_CATEGORY_ERROR, GET_CATE_COLLECTION } from "constant";
import _ from "lodash";

const initialState = {
  isLoading: false,
  isAdding: false,
  isEditing: false,
  isRemoving: false,
  isActing: false,
  isRefreshing: false,
  categoryList: [],
  pagination: {},
  categoryItem: {}
};

const Category = (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return _.assign({}, state, { isLoading: true });
    case GET_CATEGORIES_SUCCESS:
      return _.assign({}, state, { isLoading: false, isRefreshing: false, categoryList: action.payload.categoryList, pagination: action.payload.pagination });
    case GET_CATEGORIES_ERROR:
      return _.assign({}, state, { isLoading: false });
    case GET_CATEGORY:
      return _.assign({}, state, { categoryItem: action.payload });
    case ADD_CATEGORY:
      return _.assign({}, state, { isActing: true });
    case ADD_CATEGORY_SUCCESS:
      return _.assign({}, state, { isActing: false, isRefreshing: true });
    case ADD_CATEGORY_ERROR:
      return _.assign({}, state, { isActing: false });
    case EDIT_CATEGORY:
      return _.assign({}, state, { isActing: true });
    case EDIT_CATEGORY_SUCCESS:
      return _.assign({}, state, { isActing: false, isRefreshing: true });
    case EDIT_CATEGORY_ERROR:
      return _.assign({}, state, { isActing: false });
    case REMOVE_CATEGORY:
      return _.assign({}, state, { isActing: true });
    case REMOVE_CATEGORY_SUCCESS:
      return _.assign({}, state, { isActing: false, isRefreshing: true });
    case REMOVE_CATEGORY_ERROR:
      return _.assign({}, state, { isActing: false });
    case GET_CATE_COLLECTION:
      return _.assign({}, state, { categoryItem: action.payload });

    default:
      return state;
  }
}

export default Category;