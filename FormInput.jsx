import React from 'react';
import './FormInput.scss';

const FormInput = React.memo(({ value, name, onChange }) => {
  return (
    <>
      <form>
        <div className='labelBox'>
          <label className='labelInfo'>
            <h3>{name}</h3>
            <input
              name={[name]}
              type='text'
              min='1'
              value={value}
              onChange={onChange}
            />
          </label>
        </div>
      </form>
    </>
  );
});

export default FormInput;
