// css
import styles from './Profiles.module.css'

// types
import { Profile } from '../../types/models'

interface ProfilesProps {
	profiles: Profile[];
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if (!profiles.length) return <h1>No profiles yet</h1>
  

  return (
    <main className={styles.container}>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) => (
        <p key={profile.id}>{profile.name}</p>
      ))}
    </main>
  )
}
export default Profiles
