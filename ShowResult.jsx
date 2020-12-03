import React from 'react';
import './ShowResult.scss';

const ShowResult = React.memo(({ result }) => {
  const addComma = result.toLocaleString();

  return (
    <>
      이번 달 알바비는
      <div className='result'>{addComma}원</div>입니다.
    </>
  );
});

export default ShowResult;
