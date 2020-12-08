import React, { useState } from 'react';
import FormInput from './FormInput';
import ShowResult from './ShowResult';
import ExtraPay from './ExtraPay';
import Tax from './Tax';
import './AlbaCalc.scss';

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const AlbaCalc = () => {
  const [field, setField] = useState({
    wage: 8590,
    time: 1,
    day: 1,
  });
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [extra, setExtra] = useState(0);
  const [result, setResult] = useState('');

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

  const handleExtraPay = (e) => {
    setExtra((getTimeResult() / 40) * 8 * field.wage);
    console.log(extra);
    return extra;
  };

  const getTimeResult = () => {
    const timeResult = field.time * field.day;
    return timeResult;
  };

  const onClickCalcButton = (e) => {
    let result = field.wage * field.time * field.day,
      tax = 0;

    console.log(result);
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
      time: 1,
      day: 1,
    });
    setExtra(0);
    setSelectedOption('');
    setShow(false);
  };

  return (
    <>
      <div className='contents'>
        <h1 id='title'>알바비를 계산해줘 😎</h1>
        <div id='description'>
          {getCurrentYear()}년 현재 최저 시급은 {field.wage}원입니다.
        </div>
        <FormInput name='wage' value={field.wage} onChange={handleField} />
        <FormInput name='time' value={field.time} onChange={handleField} />
        <FormInput name='day' value={field.day} onChange={handleField} />
        <ExtraPay time={getTimeResult()} onClick={handleExtraPay} />
        <Tax option={selectedOption} onChange={handleOption} />
        <div>
          <button
            id='calculate'
            className='btn'
            type='submit'
            onClick={onClickCalcButton}
          >
            계산하기
          </button>
          <button
            id='reset'
            className='btn'
            type='reset'
            onClick={onClickResetButton}
          >
            초기화
          </button>
        </div>
        <div className='show'>{show && <ShowResult result={result} />}</div>
      </div>
    </>
  );
};

export default AlbaCalc;
