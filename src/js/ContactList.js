import React from 'react';

function ContactList({ contacts, filter, onRemove }) {
  const markupItem = ({id, name, number}, onRemove) => (
    <li key={id}>
      <span>{name}: {number}</span>
      <button onClick={() => onRemove(id)}>remove</button>
    </li>
  );
  
  return (
        <ul>
          {
            filter  
              ? contacts
                  .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
                  .map(({ id, name, number }) => markupItem(id, name, number))
              : contacts
                  .map((element) => markupItem(element, onRemove))
          }
        </ul>
  )
}

export default ContactList;