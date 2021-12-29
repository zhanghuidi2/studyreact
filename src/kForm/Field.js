import React, {Component, useCallback, useContext, useEffect, useState, useReducer, useRef} from 'react'
// import { useStore } from 'react-redux';
import FormContext from "./FormContext";
export default function Field({ children, name }) {
  const { getFieldValue, setFieldsValue, getFieldsValue, setFieldEntities } = useContext(FormContext)
  const [data, forceUpdate] = useState({})
  // const forceUpdate = useForceUpdate()
  useEffect(() => {
    const cb = setFieldEntities({props: {name}, onStoreChange, forceUpdate})
    return () => {
      cb()
    }
  }, [])
  const getControlled = () => {
    return {
      value: name,
      onChange: e => {
        setFieldsValue({
          [name]: e.target.value
        })
      }
    }
    
  }
  const onStoreChange = () => {
    console.log('name', name)
    // forceUpdate()
  }
  const cloneChild = React.cloneElement(children, getControlled())
  return cloneChild
}


function useForceUpdate() {
  const [, setState] = useState(0)
  const forceUpdate = useCallback(
    () => setState(prev => prev + 1),
    []
  )
  return forceUpdate

}



// export default class Field extends Component {
//   static contextType = FormContext
//   componentDidMount() {
//     this.unregister = this.context.setFieldEntities(this)
//   }
//   componentWillUnmount() {
//     this.unregister()
//   }
//   getControlled = () => {
//     const { getFieldValue, setFieldsValue } = this.context
//     const {name} = this.props
//     return {
//       value: getFieldValue(name),
//       onChange: e => {
//         setFieldsValue({
//           [name]: e.target.value
//         })
//       }
//     }
    
//   }
//   onStoreChange = () => {
//     this.forceUpdate()
//   }
//   render() {
//     const {children} = this.props
//     const cloneChild = React.cloneElement(children, this.getControlled())
//     return cloneChild
//   }
// }





