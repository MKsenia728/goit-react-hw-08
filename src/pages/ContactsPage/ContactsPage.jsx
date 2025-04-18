import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const createMessage = (operation) => {
    if (!isError) toast(`Operation ${operation} successful`);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm message={createMessage} />
      <SearchBox />
      {<Loader loading={isLoading} />}
      {isError && (
        <ErrorMessage message="Something went wrong, try again later" />
      )}
      <Toaster />
      {contacts.length > 0 && <ContactList message={createMessage} />}
    </div>
  );
};

export default ContactsPage;
