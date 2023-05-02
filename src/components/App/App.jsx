import { Route, Routes } from 'react-router';
import { LoginIn, Home, PhoneBook, Registration } from '../../pages';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { Layout } from 'components/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

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
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="registration" element={
          <RestrictedRoute redirectTo='/phonebook' component={<Registration/>}/>
        } />
        <Route path="login" element={
          <RestrictedRoute redirectTo='/phonebook' component={<LoginIn/>}/>
        } />
        <Route path="phonebook" element={
          <PrivateRoute redirectTo='/phonebook' component={<PhoneBook />}/>
        } />
      </Route>
    </Routes>
  );
};
