import { IAction } from "interfaces";
import { GET_CATEGORIES, GET_CATEGORY, ADD_CATEGORY, EDIT_CATEGORY, REMOVE_CATEGORY, GET_CATE_COLLECTION } from "constant";
import _ from "lodash";

const initialState = {
  isLoading: false,
  categoryList: [],
  categoryItem: {}
};

const Category = (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return _.assign({}, state, { categoryList: action.payload });
    case GET_CATEGORY:
      return _.assign({}, state, { categoryItem: action.payload });

    default:
      return state;
  }
}

export default Category;