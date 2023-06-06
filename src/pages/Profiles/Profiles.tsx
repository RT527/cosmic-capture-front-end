// css
import styles from './Profiles.module.css'

// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

// types
import { Profile } from '../../types/models'

interface ProfilesProps {
	profiles: Profile[];
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if (!profiles.length) return <h1>No profiles yet</h1>
  

  return (
    <main className='list'>
      {profiles.map((profile: Profile) =>
        <ProfileCard
          key={profile.id}
          profile={profile}
        />
      )}
    </main>
  )
}
export default Profiles
