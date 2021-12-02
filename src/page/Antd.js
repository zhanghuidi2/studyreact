import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import {  Input, Button, Checkbox, Modal } from "antd";
// import Form, { Field } from 'rc-field-form'
import Form, { Field } from '../kForm/'
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
  useEffect(() => {
    console.log('父组建的挂载')
    form.setFieldsValue({
      username: '用户名'
    })
  }, [])
  const onFinish = () => {
    console.log(form.getFieldsValue());
  }
  const onFinishFailed = () => {
    console.log('onFinishFailed')
  }

  return (
    <div>
      <Button type="primary" htmlType="submit" onClick={showModalHandle}>
        显示
      </Button>
      <Form form={form} name="basic" autoComplete="off"  onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Field label="用户名" name="username">
            <Input />
          </Field>
          <Field label="密码" name="password">
            <Input />
        </Field>
        <Field>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Field>
        </Form>
      {/* <Modal
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
      </Modal> */}
    </div>
  );
};

export default Demo