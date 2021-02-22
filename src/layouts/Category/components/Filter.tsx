import React from "react";
import { Button, Row, Col, Form, Input } from "antd";

const { Search } = Input;

const ColProps = {
  xs: 24,
  sm: 8,
  style: {
    marginBottom: 16,
  },
};

interface IFilterProps {
  showCreateModal: () => void;
}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  const handleSubmit = () => {};

  const onAdd = () => {
    props.showCreateModal();
  };

  return (
    <Form
      //ref={this.formRef}
      name="control-ref"
    >
      <Row gutter={24} justify="space-between">
        <Col {...ColProps} xl={{ span: 12 }} md={{ span: 8 }}>
          <h2>Category</h2>
        </Col>
        <Col xl={{ span: 12 }} md={{ span: 12 }}>
          <Row gutter={24} justify="end">
            <Col xs={{ span: 14 }} sm={{ span: 16 }} xl={{ span: 12 }}>
              <Form.Item name="title">
                <Search placeholder="Search Title" onSearch={handleSubmit} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 10 }} sm={{ span: 8 }} xl={{ span: 4 }}>
              <Button type="ghost" onClick={onAdd}>
                Create
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
