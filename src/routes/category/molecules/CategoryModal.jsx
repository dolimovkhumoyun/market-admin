import React, { useState } from "react";
import { Modal, Input, Form, Button } from "antd";

const CategoryModal = ({ input, visible, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(input.id);
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onCancel={() => onCancel(false)}
      footer={null}
      destroyOnClose={true}
    >
      <Form name="basic" onFinish={(values) => onSubmit({ id: input.id, ...values })}>
        <Form.Item label="Категория:" name="name" initialValue={input.name}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryModal;
