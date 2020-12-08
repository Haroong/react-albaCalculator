import React from 'react';
import './ShowResult.scss';

const ShowResult = React.memo(({ result }) => {
  const addComma = result.toLocaleString();

  return (
    <>
      <div id='result'>이번 달 알바비는 {addComma}원 입니다.</div>
    </>
  );
});

export default ShowResult;
