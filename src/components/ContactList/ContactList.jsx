import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts)
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.ul}>
      {contacts
        .map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={handleDelete} />
          </li>
        ))}
    </ul>
  );
}
