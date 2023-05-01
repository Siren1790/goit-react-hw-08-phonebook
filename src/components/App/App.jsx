import { Route, Routes } from 'react-router';
import AppBar from 'components/AppBar/AppBar';
import { LoginIn, Home, PhoneBook, Registration } from '../pages';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<LoginIn />} />
        <Route path="phonebook" element={<PhoneBook />} />
      </Route>
    </Routes>
  );
};
