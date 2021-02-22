import React from "react";
import { connect } from "react-redux";
import {
  getCategories,
  getCategory,
  addCategory,
  editCategory,
  removeCategory,
} from "redux/actions/category";
import { IAppState } from "redux/store/types";
import { Page, Loader } from "components/UI";
import { Filter, List, Modal } from "./components";
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
interface ICategory {
  category: any;
  getCategories: () => void;
  getCategory: (value: string) => void;
  addCategory: (value: any) => void;
  editCategory: (value: any) => void;
  removeCategory: (id: string) => void;
}

const Category: React.FunctionComponent<ICategory> = (props) => {
  const initialState = {
    currentItem: {},
    modalVisible: false,
    modalType: "create",
  };

  const [state, setState] = React.useState(initialState);
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<any>([]);

  React.useEffect(() => {
    props.getCategories();
  }, []);

  const modalProps = {
    item: state.modalType === "create" ? {} : state.currentItem,
    visible: state.modalVisible,
    title: `${
      state.modalType === "create" ? `Create Category` : `Update Category`
    }`,
    centered: true,
    loading: props.category.isActing,
    onOk: (data: any) => {
      if (state.modalType === "create") {
        props.addCategory(data);
      } else {
        props.editCategory(data);
      }
    },
    onCancel: () => {
      setState(initialState);
    },
  };

  const filterProps = {
    showCreateModal: () => {
      setState({ ...initialState, modalVisible: true });
    },
    onCreateItem: (item: any) => {
      props.addCategory(item);
    },
  };

  const listProps = {
    loading: props.category.isActing,
    dataSource: props.category.categoryList,
    showEditModal: (item: any) => {
      setState({ currentItem: item, modalVisible: true, modalType: "edit" });
    },
    onEditItem: (item: any) => {
      props.editCategory(item);
    },
    onDeleteItem: (id: string) => {
      props.removeCategory(id);
    },
  };

  return (
    <React.Fragment>
      <Loader spinning={props.category.isLoading} fullScreen />
      <div
        style={{
          height: "unset",
          backgroundColor: "transparent",
          padding: "24px",
          marginBottom: 0,
        }}
      >
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to={"/dashboard"}>Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Category</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Page inner>
        <Filter {...filterProps} />
        <List {...listProps} />
        <Modal {...modalProps} />
      </Page>
    </React.Fragment>
  );
};

const mapStateToProps = (state: IAppState) => ({
  category: state.category,
});

export default connect(mapStateToProps, {
  getCategories,
  getCategory,
  addCategory,
  editCategory,
  removeCategory,
})(Category);
