import React, { useEffect } from 'react';
import { ContactForm, ContactList, Filter } from '..';
import { PhoneBookStyled } from './App.module.js';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selector';
import { Route, Routes } from 'react-router';
import AppBar from 'components/AppBar/AppBar';
import Registration from 'components/pages/RegistrationPage';
import Login from 'components/pages/LoginPage';

const PhoneBook = () => {
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

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<AppBar/>}>
        <Route path='registration' element={<Registration/>}/>
        <Route path='login' element={<Login/>}/>
        <Route index element={<PhoneBook/>}/>
      </Route>
    </Routes>
  )
}