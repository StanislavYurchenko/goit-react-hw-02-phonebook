import React from 'react';
import { Button, ItemContact, ListContact } from './styles.js';

function ContactList({ contacts, filter, onRemove }) {
  const markupItem = ({id, name, number}, onRemove) => (
    <ItemContact key={id}>
      <span>{name}: {number}</span>
      <Button onClick={() => onRemove(id)}>remove</Button>
    </ItemContact>
  );
  
  return (
    <ListContact>
      {
        filter  
          ? contacts
            .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
            .map(element => markupItem(element, onRemove))
          : contacts
            .map(element => markupItem(element, onRemove))
      }
    </ListContact>
  )
}

export default ContactList;