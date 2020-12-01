import React from 'react';

const Result = React.memo(({ result }) => {
  return (
    <>
      <div className='result'>이번 달 알바비는 {result}원 입니다.</div>
    </>
  );
});

export default Result;
