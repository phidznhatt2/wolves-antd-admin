import React from "react";
import { connect } from "react-redux";
import { getCategories, getCategory } from "redux/actions/category";
import { IAppState } from "redux/store/types";

interface ICategory {
  getCategories: () => void;
  getCategory: (value: string) => void;
}

const Category: React.FunctionComponent<ICategory> = (props) => {
  React.useEffect(() => {
    props.getCategories();
    props.getCategory("1");
  }, []);

  return <div></div>;
};

const mapStateToProps = (state: IAppState) => ({
  categoryList: state.category,
});
export default connect(mapStateToProps, { getCategories, getCategory })(
  Category
);
