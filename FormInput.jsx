import React from 'react';
import './FormInput.scss';

const FormInput = React.memo(({ value, name, onChange }) => {
  let nickname = '';
  const setName = () => {
    if (name === 'wage') {
      nickname = '시급';
    } else if (name === 'time') {
      nickname = '하루 근무시간';
    } else {
      nickname = '한달 근무일수';
    }
    return nickname;
  };

  return (
    <>
      <form>
        <div className='labelBox'>
          <label className='labelInfo'>
            <h3>{setName()}</h3>
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
