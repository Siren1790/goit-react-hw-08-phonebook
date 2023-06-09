import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { ContactForm, ContactList, Filter } from '../components';
import { PhoneBookStyled } from '../components/App/App.module';
import { fetchContacts } from 'redux/contact/operations';
import { getError, getIsLoading } from 'redux/contact/selector';

export const PhoneBook = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <PhoneBookStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </PhoneBookStyled>
  );
};
