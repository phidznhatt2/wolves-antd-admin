import React from "react";
import { Button, Row, Col, Form, Input } from "antd";

const { Search } = Input;

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
};

const TwoColProps = {
  ...ColProps,
  xl: 96,
};

interface IFilterProps {
  showCreateModal: () => void;
}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  const handleSubmit = () => {};

  const handleReset = () => {};

  const onAdd = () => {
    props.showCreateModal();
  };

  return (
    <Form
      //ref={this.formRef}
      name="control-ref"
      //initialValues={{ name, address, createTime: initialCreateTime }}
    >
      <Row gutter={24}>
        <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
          <Form.Item name="title">
            <Search placeholder="Search Title" onSearch={handleSubmit} />
          </Form.Item>
        </Col>
        <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
          <Button type="ghost" onClick={onAdd}>
            Create
          </Button>
        </Col>
        {/* <Col
          {...TwoColProps}
          xl={{ span: 10 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <Row align="middle" justify="space-between">
            <div>
              <Button
                type="primary"
                htmlType="submit"
                className="margin-right"
                onClick={handleSubmit}
              >
                Search
              </Button>
              <Button onClick={handleReset}>Reset</Button>
            </div>
            <Button type="ghost" onClick={onAdd}>
              Create
            </Button>
          </Row>
        </Col> */}
      </Row>
    </Form>
  );
};

export default Filter;
