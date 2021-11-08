import React from 'react'

const FormRow = ({ type, name, value, handleChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
        required
      />
    </div>
  )
}

export default FormRow
