import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { User } from '../../types/models';
import styles from './NavBar.module.css';

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props;

  return (
    <nav className={styles.navbar}>
      <NavLink to="/">
        <img className={styles.logo} src={logo} alt="Meow Meow Bean" />
      </NavLink>
      {user ? (
        <ul>
          <li className={styles.welcome}>Welcome, {user.name}</li>
          <li>
            <NavLink className={styles.active} to="/profiles">
              Profiles
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.active} to="" onClick={handleLogout}>
              LOG OUT
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.active} to="/auth/change-password">
              Change Password
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink className={styles.active} to="/auth/login">
              <span className={styles.rocketButton}>&nbsp;</span>
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.active} to="/auth/signup">
              <span className={styles.rocketButton}>&nbsp;</span>
              Sign Up
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
