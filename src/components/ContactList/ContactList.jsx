import css from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts, onDelete, savedContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          savedContact={savedContact}
        />
      ))}
    </ul>
  );
};
