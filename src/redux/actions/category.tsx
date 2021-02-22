import { Dispatch } from "redux";
import * as apiCategory from "api/category";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_CATEGORY,
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_ERROR,
  EDIT_CATEGORY,
  REMOVE_CATEGORY,
  GET_CATE_COLLECTION,
  REFRESH,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_ERROR,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_ERROR,
} from "constant";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const openNotification = (type: string, message: string) => {
  notification[type]({
    message,
  });
};

const refreshState = (dispatch) => {
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
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: categoryList });
    })
    .catch((err: any) =>
      dispatch({ type: GET_CATEGORIES_ERROR, payload: err })
    );
};

const createActionGetCategories = (type: string) => {
  return (payload?: any) => (dispatch: Dispatch) => {
    dispatch({ type });
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
        dispatch({ type: GET_CATEGORIES_SUCCESS, payload: categoryList });
      })
      .catch((err: any) =>
        dispatch({ type: GET_CATEGORIES_ERROR, payload: err })
      );
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
    dispatch({ type });
    apiCategory
      .postCategory(payload)
      .then((res: any) => {
        dispatch({ type: ADD_CATEGORY_SUCCESS, payload: res.data });
        openNotification("success", "Thêm thành công!");
        refreshState(dispatch);
      })
      .catch((err: any) => {
        dispatch({ type: ADD_CATEGORY_ERROR, payload: err });
        openNotification("error", "Thêm không thành công!");
      });
  };
};

const createActionEditCategory = (type: string) => {
  return (payload?: any) => (dispatch: Dispatch) => {
    dispatch({ type });
    apiCategory
      .editCategory(payload)
      .then((res: any) => {
        dispatch({ type: EDIT_CATEGORY_SUCCESS, payload: res.data });
        openNotification("success", "Cập nhật thành công!");
        refreshState(dispatch);
      })
      .catch((err: any) => {
        dispatch({ type: EDIT_CATEGORY_ERROR, payload: err });
        openNotification("error", "Cập nhật không thành công!");
      });
  };
};

const createActionRemoveCategory = (type: string) => {
  return (payload?: any) => (dispatch: Dispatch) => {
    dispatch({ type });
    apiCategory
      .deleteCategory(payload)
      .then((res: any) => {
        dispatch({ type: REMOVE_CATEGORY_SUCCESS, payload: res.data });
        openNotification("success", "Xóa thành công!");
        refreshState(dispatch);
      })
      .catch((err: any) => {
        dispatch({ type: REMOVE_CATEGORY_ERROR, payload: err });
        openNotification("error", "Xóa không thành công!");
      });
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
