import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = event => {
    event.preventDefault();
    const contact = {
      id: event.target.elements.name.id,
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    event.target.reset();
  };

  filterContacts = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactList contacts={contacts} filter={filter} />
      </>
    );
  }
}

export default App;
