import React from "react";
import { Form, Input, Button } from "antd";

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 20 },
};

const LoginForm = ({ userInput, onSubmit }) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...formItemLayout}
      name="basic"
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      initialValues={userInput}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
        size="large"
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password size="large" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
