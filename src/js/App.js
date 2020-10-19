import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm.js'
import Filter from './Filter.js'
import ContactList from './ContactList.js'

// const INITIAL_STATE = {
//   contacts: [],
//   name: '',
//   number: '',
//   filter: '',
// }

const INITIAL_STATE = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

class App extends Component {

  state = { ...INITIAL_STATE };
  
  
  reset = () => {
    this.setState({ name: '', number: '' })
  }

  onChange = event => {
    const { name, value } = event.target;  
    this.setState({ [name]: value })
  };
  
  onSubmit = event => {
    event.preventDefault();

    const { name, contacts } = this.state;

    const isExistContact = contacts.some((contact) => contact.name === name)

    isExistContact
      ? alert(`${name} contact already exists`)
      : this.setState(({ name, contacts, number }) => {
        return name && { contacts: [...contacts, { name, id: uuidv4(), number }] }
      });
          
    this.reset();
  };

  render() {
    const { name, contacts, number, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />

        <h2>Contacts</h2>
        <Filter
          filter={filter}
          onChange={this.onChange}
          
        />
        <ContactList
          filter={filter}
          contacts={contacts} />
      </div>
  );
  }
}

export default App;
