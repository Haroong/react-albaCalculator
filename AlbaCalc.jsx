import React, { useState, useRef } from 'react';
import FormInput from './FormInput';
import ShowResult from './ShowResult';
import Tax from './Tax';
import './AlbaCalc.scss';

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const getMinimumWage = () => {
  const urlstring =
    'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%B5%9C%EC%A0%80%EC%8B%9C%EA%B8%89'; //window.location.href
  const url = new URL(urlstring);
  const c = url.searchParams.get('_wageInput');
  console.log(c);
};

const addcomma = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const AlbaCalc = () => {
  const [field, setField] = useState({
    wage: getMinimumWage(),
    hour: 1,
    day: 1,
  });
  const [show, setShow] = useState(false);
  const [result, setResult] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleField = (e) => {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
  };

  const handleOption = (e) => {
    const toNumber = parseFloat(e.target.value);
    setSelectedOption(toNumber);
  };

  const onClickCalcButton = (e) => {
    let result = field.wage * field.hour * field.day,
      tax = 0;

    if (selectedOption === 8.98) {
      tax = result * 0.0898;
      setResult(parseInt(result - tax));
    } else if (selectedOption === 3.3) {
      tax = result * 0.033;
      setResult(parseInt(result - tax));
    } else {
      setResult(result);
    }

    setShow(true);
  };

  const onClickResetButton = () => {
    setField({
      wage: 8590,
      hour: '',
      day: '',
    });
    setSelectedOption('');
    setShow(false);
  };

  return (
    <>
      <div className='contents'>
        <h1>알바비가 얼마나 들어올까?</h1>
        <div>
          {getCurrentYear()}년 현재 최저 시급은 {field.wage}원입니다.
        </div>
        <FormInput name='wage' value={field.wage} onChange={handleField} />
        <FormInput name='hour' value={field.hour} onChange={handleField} />
        <FormInput name='day' value={field.day} onChange={handleField} />
        <Tax option={selectedOption} onChange={handleOption} />
        <button id='inputBtn' type='submit' onClick={onClickCalcButton}>
          계산하기
        </button>
        <button id='resetBtn' type='reset' onClick={onClickResetButton}>
          초기화
        </button>
        <div className='show'>{show && <ShowResult result={result} />}</div>
      </div>
    </>
  );
};

export default AlbaCalc;
