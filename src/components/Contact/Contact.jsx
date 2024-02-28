import { HiUser } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export const Contact = ({ contact, onDelete }) => {
  console.log(contact);
  return (
    <li className={css.item}>
      <div>
        <p className={css.title}>
          <HiUser className="my-icon" size="20" /> Name: {contact.name}
        </p>
        <p className={css.title}>
          <span className={css.img}>
            <BsTelephoneFill className="my-icon" size="20" />
          </span>
          Number: {contact.number}
        </p>
      </div>
      <button className={css.deleteButton} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};
