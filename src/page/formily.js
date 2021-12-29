import React from 'react'
import {
  SchemaForm,
  registerFormField,
  connect
} from '@formily/react-schema-renderer'

registerFormField(
  
  'string',
  connect()(({ value, onChange }) => {
    return <input value={value} onChange={onChange} />
  })
)

export default Formily = () => {
  return (
    <SchemaForm
      schema={{
        type: 'object',
        properties: {
          input: {
            type: 'string'
          }
        }
      }}
      onChange={console.log('00000')} //{input:'this is your input string'}
    />
  )
}

