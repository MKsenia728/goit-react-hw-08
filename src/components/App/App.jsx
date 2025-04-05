import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectContacts, selectIsError, selectIsLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      {contacts.length > 0 && <ContactList/>}
    </div>
  );
}

export default App;
