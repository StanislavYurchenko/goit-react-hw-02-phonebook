import React, { Component } from 'react';
import ContactForm from './ContactForm.js';
import Filter from './Filter.js';
import ContactList from './ContactList.js';
import { Container, H1, H2 } from './styles.js';

class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
   };  
  
  onChange = event => {
    const { name, value } = event.target;  
    this.setState({ [name]: value })
  };

  isExistContact = (name) => {
    const { contacts } = this.state;
    return contacts.some((contact) => contact.name === name)
  }
    
  addContact = ({ name, number, id }) => {
    const newContact = { name, number, id };

    this.setState(({ contacts }) => {
      return name && { contacts: [...contacts, newContact] }
    })      
  }
            
  onRemove = idToRemove => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(({id}) => id !== idToRemove)
    })
  }  

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <H1>Phonebook</H1>
        <ContactForm
          addContact={this.addContact}
          isExistContact={this.isExistContact}
        />

        <H2>Contacts</H2>
        <Filter
          filter={filter}
          onChange={this.onChange}          
        />
        <ContactList
          filter={filter}
          contacts={contacts}
          onRemove={this.onRemove}
        />
      </Container>
  );
  }
}

export default App;
