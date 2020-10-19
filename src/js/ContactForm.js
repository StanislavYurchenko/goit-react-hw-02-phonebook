import React from 'react';

function ContactForm({ name, number, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <h3>Name</h3>
      <input onChange={onChange} value={name} name='name' type='text' />
      
      <h3>Number</h3>
      <input onChange={onChange} value={number} name='number' type='text' />
      
      <button name='btnAdd' type='submit'>Add contact</button>
    </form>
  )
}

export default ContactForm;