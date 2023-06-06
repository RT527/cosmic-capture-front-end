// assets
import defaultPic from '../../assets/icons/profile.png'

// types
import { Profile } from '../../types/models'
import { OpinionManagerFormData } from "../../types/forms"

// components
import OpinionManager from '../OpinionManager/OpinionManager'

interface ProfileCardProps {
  profile: Profile;
  handleOpinion: (formData: OpinionManagerFormData) => Promise<void>;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  return (
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>
  
      <OpinionManager { ...props } />
  
    </article>
  )
}

export default ProfileCard