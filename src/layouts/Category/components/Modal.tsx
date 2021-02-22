import React from "react";
import { Form, Input, InputNumber, Radio, Modal, Cascader } from "antd";

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

interface IModalProps {
  item: any;
  onOk: (data: any) => void;
}

const CategoryModal: React.FunctionComponent<IModalProps> = React.memo(
  (props) => {
    //const formRef = React.useRef();

    const handleOk = () => {
      const { item = {}, onOk } = props;

      /* formRef.current.validateFields()
      .then(values => {
        const data = {
          ...values,
          key: item.key,
        }
        data.address = data.address.join(' ')
        onOk(data)
      })
      .catch(errorInfo => {
        console.log(errorInfo)
      }) */
    };

    const { item = {}, onOk, ...modalProps } = props;
    console.log(item);

    return (
      <Modal {...modalProps} onOk={handleOk}>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <Form
          //ref={formRef}
          name="control-ref"
          initialValues={{
            title: item.title,
            description: item.description,
          }}
          layout="horizontal"
        >
          <FormItem
            name="title"
            rules={[{ required: true }]}
            label="Title"
            hasFeedback
            {...formItemLayout}
          >
            <Input />
          </FormItem>
          <FormItem
            name="description"
            rules={[{ required: false }]}
            label="Description"
            hasFeedback
            {...formItemLayout}
          >
            <Input />
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

export default CategoryModal;
