import React, { Component,useEffect } from 'react'
import useForm from './useForm'
import FormContext from "./FormContext";

export default function Form({ children, onFinish, onFinishFailed, form }) {
  useEffect(() => {
    console.log('子组建的挂载')
  }, [])


  // form组建的form是为了默认值
  const [formInstence] = useForm(form)
  formInstence.setCallbacks({ onFinish, onFinishFailed })

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      formInstence.onSubmit()
    }}>
      <FormContext.Provider value={formInstence}>
        {children}
      </FormContext.Provider>
    </form>
  )
}

