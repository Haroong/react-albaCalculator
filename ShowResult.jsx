import React from 'react';

const addComma = () => {};

const ShowResult = React.memo(({ result }) => {
  return (
    <>
      이번 달 알바비는
      <div className='result'>{result}</div>원 입니다.
    </>
  );
});

export default ShowResult;
