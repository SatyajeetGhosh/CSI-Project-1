import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
    const { label, onChange, errorMessage, id, ...inputProps } = props;

    const [focused, setFocused] = useState(false);

    const handleFocused = (e) => {
        setFocused(true);
    };

  return (
   <div className="mb-3">
     {/* <label className="mb-1">{ label }</label> */}
     <input className="formInput w-100 p-3 rounded-2 d-flex border border-0 fs-5" {...inputProps} onChange={onChange} onBlur={handleFocused} focused={focused.toString()}/>
     <span className="fs-6 text-danger">{errorMessage}</span>
   </div>
  )
}

export default FormInput