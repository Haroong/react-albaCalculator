import React, { useState } from 'react';
import './Form.scss';

const Form = React.memo(({ values }) => {
  const onChangeInput = (e) => {
    const { name, value } = e.target;

    // 음수값이 입력되었을 경우
    if (value < 1) {
      alert('입력값은 음수가 될 수 없습니다.');
    }

    // 입력값이 양수일 경우에만 setValues 변경
    if (value > 1) {
      values({ ...values, [name]: parseInt(value, 10) });
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log('form submit button was clicked');
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className='labelBox'>
          <label className='labelInfo'>
            시급
            <input
              name='wage'
              type='number'
              value={values.wage}
              onChange={onChangeInput}
            />
          </label>
          <label className='labelInfo'>
            일일 근무 시간
            <input
              name='hour'
              type='number'
              value={values.hour}
              onChange={onChangeInput}
            />
          </label>
          <label className='labelInfo'>
            일주일 근무 일수
            <input
              name='day'
              type='number'
              value={values.day}
              onChange={onChangeInput}
            />
          </label>
        </div>
      </form>
    </>
  );
});

export default Form;
