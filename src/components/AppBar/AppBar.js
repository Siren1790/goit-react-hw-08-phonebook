import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <header style={styles.header}>
      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/phonebook">PhoneBook</NavLink> */}
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/login">LogIn</NavLink> */}
    </header>
  );
}
