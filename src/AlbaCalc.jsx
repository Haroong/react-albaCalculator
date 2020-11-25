import React, { useState, useRef } from 'react';
import Form from './Form';
import './AlbaCalc.scss';

const AlbaCalc = () => {
  const [result, setResult] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log('submit button was clicked');
    setResult(
      `이번달 알바비는 ${parseInt(e.values.wage * e.values.hour)}원 입니다.`
    );
  };

  return (
    <>
      <div className='contents'>
        <h1>알바비가 얼마나 들어올까?</h1>
        <div>2020년 현재 최저 시급은 8,590원입니다.</div>
        <form onSubmit={onSubmitForm}>
          <Form />
        </form>
        <button id='inputBtn' type='submit'>
          계산하기
        </button>
        <div id='result'>{result}</div>
      </div>
    </>
  );
};

export default AlbaCalc;
