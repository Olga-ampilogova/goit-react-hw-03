import { useState } from "react";
import { useEffect } from "react";
import css from "./App.module.css";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox.jsx";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
export default function App() {
  const savedContact =
    JSON.parse(window.localStorage.getItem("saved-contact")) || initialContacts;

  const [contacts, setContacts] = useState(savedContact);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(visibleContacts);

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onSearch={setFilter} />
        <ContactList
          contacts={visibleContacts}
          savedContact={savedContact}
          onDelete={deleteContact}
        />
      </div>
    </>
  );
}
