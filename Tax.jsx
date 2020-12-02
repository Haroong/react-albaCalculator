import React from 'react';

const Tax = React.memo(({ option, onChange }) => {
  const taxList = {
    tax1: 8.98,
    tax2: 3.3,
  };

  return (
    <>
      <select value={option} onChange={onChange}>
        <option selected value='1'>
          미적용
        </option>
        <option value={taxList.tax1}>8.98%</option>
        <option value={taxList.tax2}>3.3%</option>
      </select>
    </>
  );
});

export default Tax;
