import React from "react";
import { connect } from "react-redux";
import { startAddCategory, startGetCategories } from "../../actions/categories";
import { Category } from "../../types/CategoryTypes/ICategory";
import { AppState } from "../../reducers";
import { bindActionCreators } from "redux";
import { AppActions } from "../../types/CategoryTypes/action";
import { ThunkDispatch } from "redux-thunk";
interface IDashboardProps {}

type Props = IDashboardProps & LinkStateProps & LinkDispatchProps;

export class Dashboard extends React.Component<Props, IDashboardProps> {
  componentDidMount() {
    this.props.startGetCategories();
  }
  render() {
    return <div>Dashboard</div>;
  }
}

interface LinkStateProps {
  categories: Category[];
}
interface LinkDispatchProps {
  startGetCategories: () => void;
  startAddCategory: (data: any) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: IDashboardProps
): LinkStateProps => ({
  categories: state.categories,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IDashboardProps
): LinkDispatchProps => ({
  startGetCategories: bindActionCreators(startGetCategories, dispatch),
  startAddCategory: bindActionCreators(startAddCategory, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
