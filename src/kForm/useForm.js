import React from 'react'
class FormStore{
  constructor(props) {
    this.store = {}; // 数据仓库
    this.fieldEntities = [] // 组件实例
    this.callbacks = {}
  }
  getFieldsValue = () => {
    return {...this.store}
  }
  getFieldValue = (key) => {
    return this.store[key]
  }
  setFieldsValue = (newValues)  => {
    this.store = { ...this.store, ...newValues }
    // 刷新组建
    this.fieldEntities.forEach(f => {
      Object.keys(newValues).forEach(key => {
        if (f.props.name === key) {
          f.forceUpdate()
        }
      }) 
    })
  }
  setFieldEntities = (_this) => {
    this.fieldEntities.push(_this)
    return () => {
      const _index = this.fieldEntities.findIndex(f => f === _this)
      this.fieldEntities.splice(_index, 1)
      delete this.store[_this.props.name]
    }
  }
  setCallbacks = (callback) => {
    this.callbacks = {...this.callbacks, ...callback}
  }
  onSubmit = () => {
    const { onFinish, onFinishFailed } = this.callbacks
    // onFinish(this.getFieldValue)
    // onFinishFailed()
  }
  getForm() {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      setFieldEntities: this.setFieldEntities,
      onSubmit: this.onSubmit,
      setCallbacks: this.setCallbacks
    }
  }
}



export default function useForm(form) {
  const formRef = React.useRef()
  if (!formRef.current) {
    console.log('form', form)
    // 刷新第一次走的antd.js ，参数没有form
    // 第二次就走Form组件传过去的，所以是同一个数据仓库
    if (!form) {
      // 这里是为了设置默认知其效果
      formRef.current = new FormStore().getForm()
    } else {
      // 如果传过来，就用当前的
      formRef.current = form;
    }
  }
  return [formRef.current]
}
