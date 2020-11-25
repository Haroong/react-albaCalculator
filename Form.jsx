import React, { useState, useRef } from 'react';
import './Form.scss';

const Form = React.memo(() => {
  const [values, setValues] = useState({ wage: 8590, hour: 1, day: 1 });
  //const inputRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <div className='labelBox'>
        <label className='labelInfo'>
          시급
          <input
            name='wage'
            type='number'
            value={values.wage}
            onChange={onChange}
          />
        </label>
        <label className='labelInfo'>
          일일 근무 시간
          <input
            name='hour'
            type='number'
            value={values.hour}
            onChange={onChange}
          />
        </label>
        <label className='labelInfo'>
          일주일 근무 일수
          <input
            name='day'
            type='number'
            value={values.day}
            onChange={onChange}
          />
        </label>
      </div>
    </>
  );
});

export default Form;
