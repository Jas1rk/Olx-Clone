import React, { useState } from 'react'

const UseForm = (initalValue) => {
    const [value,setValue] = useState(initalValue)
  return [
    value,
    (event) => {
        setValue({
            ...value,
            [event.target.name]:event.target.value
        })
    }
  ]
}

export default UseForm
