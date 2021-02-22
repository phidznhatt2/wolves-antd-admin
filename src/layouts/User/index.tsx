import React from "react";
import { Table, Input, Space, Button, Modal, Form, Select } from 'antd';
// import reqwest from 'reqwest';
import { Breadcrumb } from 'antd';
import { NavLink } from "react-router-dom";
import { AudioOutlined } from '@ant-design/icons';


interface IUserProps { }

const User: React.FunctionComponent<IUserProps> = (props) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const deleteUser = (value) => {
    console.log(value);
  }
  const { Search } = Input;
  const { Option } = Select;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a onClick={() => { deleteUser({ key: record.key, test: record.name }) }}>Delete </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]
  const onGenderChange = (value: string) => {
    console.log(value);
  };
  const renderOption=()=>{
    return data.map((item,index)=>{
      return<Option value={item.name}>{item.address}</Option>
    })
  }
  return (
    <>
      <div className="header-content">
        <Breadcrumb>
          <Breadcrumb.Item><NavLink to={"/dashboard"}>Home</NavLink></Breadcrumb.Item>
          <Breadcrumb.Item>User</Breadcrumb.Item>
        </Breadcrumb>
        <h2 style={{ marginTop: "13px" }}> Page User</h2>


      </div>
      <div className="content-dashboard">
        <div className="top-content">
          <h2> title</h2>
          <Space direction="vertical">
            <Search placeholder="input search text" style={{ width: 200 }} />
          </Space>
        </div>
        <div style={{ padding: "0 10px" }}>
          <Button onClick={showModal} style={{ margin: "15px 0px" }} type="dashed" block>
            Create
        </Button>
        </div>

        <Table style={{ marginTop: "20px" }} columns={columns} dataSource={data} size="middle" />
      </div>
      <Modal title="Create Category" footer={null} visible={isModalVisible}  onCancel={handleCancel}>
        <Form>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              {renderOption()}
            </Select>
          </Form.Item>
          <Form.Item >
            <Button  type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>);
};

export default User;

