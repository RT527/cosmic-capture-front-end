import styles from './Profiles.module.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { Profile } from '../../types/models'
import { OpinionManagerFormData } from '../../types/forms'

interface ProfilesProps {
  profiles: Profile[];
  handleOpinion: (formData: OpinionManagerFormData) => Promise<void>;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if (!profiles.length) return <h1>No profiles yet</h1>

  return (
    <main className={styles.container}>
      {profiles.map((profile: Profile) => (
        <ProfileCard
          key={profile.id.toString()}
          profile={profile}
          handleOpinion={props.handleOpinion}
        />
      ))}
    </main>
  )
}

export default Profiles
