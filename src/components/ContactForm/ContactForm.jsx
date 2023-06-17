import { nanoid } from 'nanoid';
const nameID = nanoid();

export const ContactForm = ({ addContact }) => {
  return (
    <form onSubmit={addContact} htmlFor={nameID}>
      <label>
        Name
        <input
          type="text"
          name="name"
          id={nameID}
          placeholder="Your name"
          pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
