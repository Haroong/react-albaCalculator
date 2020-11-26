import React, { useState, useRef } from 'react';
import Form from './Form';
import Show from './Show';
import './AlbaCalc.scss';

const AlbaCalc = () => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    wage: 8590,
    hour: 1,
    day: 1,
  });
  const [result, setResult] = useState(0);

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const onClickButton = () => {
    setResult(...result, wage * hour * day);
    setShow(true);
  };

  return (
    <>
      <div className='contents'>
        <h1>알바비가 얼마나 들어올까?</h1>
        <div>{getCurrentYear()}년 현재 최저 시급은 8,590원입니다.</div>
        <Form values={values} />
        <button id='inputBtn' type='submit' onClick={onClickButton}>
          계산하기
        </button>
        <div className='show'>{show && <Show />}</div>
      </div>
    </>
  );
};

export default AlbaCalc;
