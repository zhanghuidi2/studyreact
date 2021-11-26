import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button, Checkbox, Modal } from "antd";

const Demo = () => {
  const [dialog, setDialog] = useState(false);
  const [form] = Form.useForm();
  // 点击按钮出来弹窗
  const showModalHandle = () => {
    setDialog(!dialog);
  };
  // 弹出的确定按钮
  const handleOk = () => {
    console.log(form.getFieldsValue());
    setDialog(false);
  };
  // 弹出的确定取消
  const handleCancel = () => {
    setDialog(false);
  };

  return (
    <div>
      <Button type="primary" htmlType="submit" onClick={showModalHandle}>
        显示
      </Button>
      <Modal
        title="函数组建的modal + form "
        visible={dialog}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} name="basic" autoComplete="off">
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Demo