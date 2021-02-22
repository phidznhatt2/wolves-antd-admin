export interface IAppState {
  category: ICategoryState | undefined
}

export interface ICategoryState {
  isLoading: boolean,
  isAdding: boolean,
  isEditing: boolean,
  isRemoving: boolean,
  isActing: boolean,
  categoryList: any,
  categoryItem: object
}
