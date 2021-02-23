export interface IAppState {
  category: ICategoryState | undefined
}

export interface ICategoryState {
  isLoading: boolean,
  isAdding: boolean,
  isEditing: boolean,
  isRemoving: boolean,
  isActing: boolean,
  isRefreshing: boolean,
  categoryList: any,
  pagination: object,
  categoryItem: object
}
