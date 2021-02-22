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
import { Page } from "components/UI";
import { Filter, List, Modal } from "./components";

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
    rowSelection: {
      selectedRowKeys,
      onChange: (selected) => {
        setSelectedRowKeys(selected);
      },
    },
  };

  return (
    <Page inner>
      <Filter {...filterProps} />
      {/* {selectedRowKeys.length > 0 && (
    <Row style={{ marginBottom: 24, textAlign: 'right', fontSize: 13 }}>
      <Col>
        {`Selected ${selectedRowKeys.length} items `}
        <Popconfirm
          title="Are you sure delete these items?"
          placement="left"
          onConfirm={this.handleDeleteItems}
        >
          <Button type="primary" style={{ marginLeft: 8 }}>
            Remove
          </Button>
        </Popconfirm>
      </Col>
    </Row>
  )} */}
      <List {...listProps} />
      <Modal {...modalProps} />
    </Page>
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
