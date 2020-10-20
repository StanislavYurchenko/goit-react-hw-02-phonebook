import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

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


// const INITIAL_STATE = {
//   name: '',
//   number: ''
// }

// class ContactForm extends Component {

//   state = { ...INITIAL_STATE };  

//   reset = () => {
//     this.setState({ name: '', number: '' })
//   }

//   isExistContact = () => {
//     const { name } = this.state;
//     const { contacts } = this.props;
//     return contacts.some((contact) => contact.name === name)
//   }

//   onChange = event => {
//     const { name, value } = event.target;  
//     this.setState({ [name]: value })
//   };

//   onSubmit = event => {
//     event.preventDefault();

//     const { name } = this.state;
//     const { contacts } = this.props;
  
//     this.isExistContact()
//       ? alert(`${name} contact already exists`)
//       : this.setState(({ name, number }) => {
//         return name && { contacts: [...contacts, { name, id: uuidv4(), number }] }
//       });
          
//     this.reset();
//   };


//   render() {
//     const { onSubmit } = this.props;
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={onSubmit}>
//         <h3>Name</h3>
//         <input onChange={this.onChange} value={name} name='name' type='text' />
        
//         <h3>Number</h3>
//         <input onChange={this.onChange} value={number} name='number' type='text' />
        
//         <button name='btnAdd' type='submit'>Add contact</button>
//       </form>
//     )
//   }
// }

export default ContactForm;