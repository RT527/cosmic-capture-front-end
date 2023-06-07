import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

// css
import styles from './NavBar.module.css'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props;

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.welcome}>Welcome, {user?.name}</li>
        {user ? (
          <>
            <li>
              <NavLink activeClassName={styles.active} to="/profiles">
                Profiles
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="" onClick={handleLogout}>
                LOG OUT
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="/auth/change-password">
                Change Password
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink activeClassName={styles.active} to="/auth/login">
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} to="/auth/signup">
                Sign Up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
