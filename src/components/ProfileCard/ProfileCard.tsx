import defaultPic from '../../assets/icons/profile.png'
import styles from './ProfileCard.module.css'
import { Profile } from '../../types/models'
import { OpinionManagerFormData } from "../../types/forms"
import OpinionManager from '../OpinionManager/OpinionManager'

interface ProfileCardProps {
  profile: Profile
  handleOpinion: (formData: OpinionManagerFormData) => Promise<void>
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  return (
    <div className={styles.profileCard}>
      <div className={styles.card}>
        <div className={styles.profilePicture}>
          <img src={profilePic} alt={`${profile.name}'s avatar`} />
        </div>
        <div className={styles.profileInfo}>
          <h1>{profile.name}</h1>
          <OpinionManager {...props} />
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
