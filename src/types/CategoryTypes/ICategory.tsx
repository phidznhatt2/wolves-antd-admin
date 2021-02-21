export interface Category {
  id: string;
  attributes: {
    title: string;
    desciption: string;
    slug: string;
  };
  meta: {
    createdAt: string;
    updatedAt: string;
  };
}
