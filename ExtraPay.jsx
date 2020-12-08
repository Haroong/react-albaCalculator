import React from 'react';
import './ExtraPay.scss';

const ExtraPay = React.memo(({ time, onClick }) => {
  const types = ['포함', '미포함'];
  const enabled = time >= 15;

  return (
    <>
      <h3>주휴수당</h3>
      <div>
        {types.map((type, index) => (
          <button
            className='btn'
            key={index}
            disabled={!enabled}
            onClick={onClick}
          >
            {type}
          </button>
        ))}
      </div>
    </>
  );
});

export default ExtraPay;
