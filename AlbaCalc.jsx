import React, { useState, useRef } from 'react';
import FormInput from './FormInput';
import Show from './Show';
import './AlbaCalc.scss';

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const getHtmlElement = () => {
  const url =
    'https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=4&acq=chlwjtl&qdt=0&ie=utf8&query=%EC%B5%9C%EC%A0%80%EC%8B%9C%EA%B8%89';
  const element = document.documentElement.outerHTML(url);
};

const AlbaCalc = () => {
  const [field, setField] = useState({
    wage: 8590,
    hour: 1,
    day: 1,
  });
  const [show, setShow] = useState(false);
  const [result, setResult] = useState('');

  const handleUpdate = (e) => {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
  };

  const onClickCalcButton = (e) => {
    e.preventDefault();
    setResult(field.wage * field.hour * field.day);
    setShow(true);
  };

  const onClickResetButton = () => {
    setField({
      wage: 8590,
      hour: '',
      day: '',
    });
  };

  return (
    <>
      <div className='contents'>
        <h1>알바비가 얼마나 들어올까?</h1>
        <div>
          {getCurrentYear()}년 현재 최저 시급은 {field.wage}원입니다.
        </div>
        <FormInput name='wage' value={field.wage} onChange={handleUpdate} />
        <FormInput name='hour' value={field.hour} onChange={handleUpdate} />
        <FormInput name='day' value={field.day} onChange={handleUpdate} />
        <button id='inputBtn' type='submit' onClick={onClickCalcButton}>
          계산하기
        </button>
        <button id='resetBtn' type='reset' onClick={onClickResetButton}>
          초기화
        </button>
        <div className='show'>{show && <Show result={result} />}</div>
      </div>
    </>
  );
};

export default AlbaCalc;
