
import ReactDOM from "react-dom";
import { Form, Input, Button, Checkbox, Modal } from "antd";
import React, { Component } from 'react'

export default class Demo extends Component {
  state = {
    dialog: false
  }
  formRef = React.createRef();
  showModalHandle() {
    this.setState({
      dialog: !this.state.dialog
    })
  }
  handleOk() {
    console.log(this.formRef.current.getFieldsValue())
  }
  render() {
    const {dialog} = this.state
    return (
      <div>
        <Button type="primary" htmlType="submit" onClick={() => this.showModalHandle()}>
          显示
        </Button>
        <Modal
          title="类组建的modal + form "
          visible={dialog}
          onOk={() => this.handleOk()}
        >
          <Form ref={this.formRef} name="basic" autoComplete="off">
            <Form.Item label="用户名" name="username">
              <Input />
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}