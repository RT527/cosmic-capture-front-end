import styles from './Landing.module.css'
// assets
import logo from '../../assets/logo.png'
// service
import * as authService from '../../services/authService'
// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null
  handleLogout: ()=> void
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user, handleLogout } = props

  const handleDeleteAccount = async (): Promise<void> => {
    try {
      await authService.deleteAccount()
      handleLogout()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles.container}>
      <h1>Cosmic Capture <br/> Moons</h1>
      <img src={logo} alt="a yummy" />
      { user &&
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
    </main>
  )
}

export default Landing
