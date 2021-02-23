import React from "react";
import { Table, Modal, Button } from "antd";
import { DropOption } from "components/UI";
import styles from "./List.module.scss";
import { ExclamationCircleOutlined } from "@ant-design/icons";

interface IListProps {
  loading: boolean;
  pagination: any;
  onDeleteItem: (id: string) => void;
  showEditModal: (item: any) => void;
}

const { confirm } = Modal;

const ListExample: React.FunctionComponent<IListProps> = React.memo((props) => {
  const handleMenuClick = (record, e) => {
    const { onDeleteItem, showEditModal } = props;

    if (e.key === "1") {
      showEditModal(record);
    } else if (e.key === "2") {
      confirm({
        title: "Do you want to delete these items?",
        icon: <ExclamationCircleOutlined />,
        onOk() {
          onDeleteItem(record.id);
        },
        onCancel() {},
        okButtonProps: {
          loading: props.loading,
        },
      });
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "CreateTime",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "Operation",
      key: "operation",
      render: (text, record) => {
        return (
          <DropOption
            onMenuClick={(e) => handleMenuClick(record, e)}
            menuOptions={[
              { key: "1", name: "Update" },
              { key: "2", name: "Delete" },
            ]}
          />
        );
      },
    },
  ];

  const { count, totalPages, limit, skip } = props.pagination;

  return (
    <Table
      {...props}
      pagination={{
        total: count,
        showTotal: (total) => `Total ${total} Items`,
      }}
      className={styles.table}
      bordered
      scroll={{ x: 1200 }}
      columns={columns}
      rowKey={(record) => record.id}
    />
  );
});

export default ListExample;
