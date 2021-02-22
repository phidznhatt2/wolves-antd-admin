import api from "../services/api";

const endPoint = "/categories";
const endPoint_Collection = "/collections";

export const getCategoryList = (params: any = null) => {
  return api.get(`${endPoint}`, params);
};

export const getCategoryById = (params: any) => {
  //const { categoryId } = params;
  return api.get(`${endPoint}/${params}`);
};

export const postCategory = (params: any) => {
  return api.post(`${endPoint}`, params);
};

export const editCategory = (params: any) => {
  const { id } = params;
  return api.patch(`${endPoint}/${id}`, params);
};

export const deleteCategory = (params: any) => {
  const { categoryId } = params;
  const url = [endPoint, categoryId].join("/");
  return api.delete(url);
};

export const getCateCollection = (params: any) => {
  const { categoryId } = params;
  return api.get(`${endPoint}/${categoryId}/${endPoint_Collection}`);
};
