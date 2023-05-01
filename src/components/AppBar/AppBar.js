import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  return (
    <>
      <header style={styles.header}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/phonebook">PhoneBook</NavLink>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/login">LogIn</NavLink>
      </header>
      <Outlet />
    </>
  );
}
