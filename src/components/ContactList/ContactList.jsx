export const ContactList = ({ contacts, filter }) => {
  const filteredArray = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredArray.map(({ id, name, number }) => (
        <li key={id}>
          {name} {number}
        </li>
      ))}
    </ul>
  );
};
