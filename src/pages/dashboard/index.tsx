import React from "react";
import { connect } from "react-redux";
import { startGetCategories } from "../../actions/categories";
import { Category } from "../../types/CategoryTypes/Category";
import { AppState } from "../../reducers";
import { Dispatch, bindActionCreators } from "redux";
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
