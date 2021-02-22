export interface IAppState {
  category: ICategoryState | undefined
}

export interface ICategoryState {
  isLoading: boolean
  categoryList: any
  categoryItem: object
}
