import styles from './Profiles.module.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { Profile } from '../../types/models'
import { OpinionManagerFormData } from '../../types/forms'

interface ProfilesProps {
  profiles: Profile[]
  handleOpinion: (formData: OpinionManagerFormData) => Promise<void>
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if (!profiles.length) return <h1>No profiles yet sorry</h1>

  return (
    <main className={styles.container}>
      {profiles.map((profile: Profile) => (
        <div className={styles.cardWrapper} key={profile.id.toString()}>
          <ProfileCard
            profile={profile}
            handleOpinion={props.handleOpinion}
          />
        </div>
      ))}
    </main>
  )
}

export default Profiles