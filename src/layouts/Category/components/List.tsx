/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./List.module.scss";
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Modal,
} from "antd";
import { DropOption } from "components/UI";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;
interface Item {
  key: string;
  title: string;
  description: number;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  record: Item;
  index: number;
  children: React.ReactNode;
  dataSource: any;
}

interface IListProps {
  loading: boolean;
  pagination: any;
  onDeleteItem: (id: string) => void;
  onEditItem: (item: any) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ListExample: React.FC<IListProps> = (props) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ title: "", description: "", ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;
      const item = { id: key, ...row };
      props.onEditItem(item);
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleMenuClick = (record, e) => {
    const { onDeleteItem } = props;

    if (e.key === "1") {
      edit(record);
    } else if (e.key === "2") {
      confirm({
        title: "Do you want to delete these items?",
        icon: <ExclamationCircleOutlined />,
        onOk() {
          onDeleteItem(record.key);
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
      width: "29%",
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "29%",
      editable: true,
    },
    {
      title: "CreateTime",
      dataIndex: "createTime",
      key: "createTime",
      width: "29%",
      editable: false,
    },
    {
      title: "Operation",
      key: "operation",
      render: (_: any, record) => {
        const editable = isEditing(record);

        return editable ? (
          <span>
            <a
              // eslint-disable-next-line no-script-url
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <DropOption
            onMenuClick={(e) => handleMenuClick(record, e)}
            menuOptions={[
              { key: "1", name: "Update" },
              { key: "2", name: "Delete" },
            ]}
            disabled={editingKey !== ""}
          />
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        {...props}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default ListExample;
