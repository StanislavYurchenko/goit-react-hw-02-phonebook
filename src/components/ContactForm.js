import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InputText, Button, Form, H3 } from './styles.js';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { addContact, isExistContact } = this.props;

    isExistContact(name)
      ? alert(`${name} contact already exists`)
      : addContact({ name, number, id: uuidv4() });

    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <H3>Name</H3>
        <InputText
          onChange={this.onChange}
          value={name}
          name="name"
          type="text"
        />

        <H3>Number</H3>
        <InputText
          onChange={this.onChange}
          value={number}
          name="number"
          type="text"
        />

        <Button name="btnAdd" type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
