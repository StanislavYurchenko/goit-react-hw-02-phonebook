import React from 'react';
import { InputText } from './styles.js';

function Filter({ filter, onChange }) {
  return (
    <>
      <div>Find contacts by name</div>
      <InputText onChange={onChange} value={filter} name="filter" type="text" />
    </>
  );
}

export default Filter;
