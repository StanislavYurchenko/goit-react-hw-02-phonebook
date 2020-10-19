import React from 'react';

function ContactList({ contacts, filter }) {
  return (
        <ul>
          {
            filter  
              ? contacts
                  .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
                  .map(({ id, name, number }) => (<li key={id}>{name}: {number}</li>))
              : contacts
                  .map(({ id, name, number }) => (<li key={id}>{name}: {number}</li>))
          }
        </ul>
  )
}

export default ContactList;