import React from 'react';
import './Tax.scss';

const Tax = React.memo(({ option, onChange }) => {
  const taxList = {
    tax1: 8.98,
    tax2: 3.3,
  };

  return (
    <>
      <div id='tax'>
        <h3>세금</h3>
        <select id='selectTax' value={option} onChange={onChange}>
          <option defaultValue value='1'>
            미적용
          </option>
          <option value={taxList.tax1}>8.98%</option>
          <option value={taxList.tax2}>3.3%</option>
        </select>
      </div>
    </>
  );
});

export default Tax;
