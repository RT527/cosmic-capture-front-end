// npm modules
import { useState } from 'react'
import useSound from 'use-sound'

// assets
import bean from '../../assets/icons/bean.png'
import noBean from '../../assets/icons/noBean.png'
import up from '../../assets/audio/up.wav'
import down from '../../assets/audio/down.wav'
// types
import { Profile } from '../../types/models'
import { OpinionManagerFormData } from '../../types/forms'


interface OpinionManagerProps {
	profile: Profile;
  handleOpinion: (FormData: OpinionManagerFormData) => Promise<void>
}

const OpinionManager = (props: OpinionManagerProps): JSX.Element => {
	const { profile, handleOpinion } = props

  const [hover, setHover] = useState<number | null>(null)
  const [comment, setComment] = useState<string>('')

  const [rateUp] = useSound(up, { volume: 0.2 })
  const [rateDown] = useSound(down, { volume: 0.2 })

  const ratingOptions = [ 1, 2, 3, 4, 5 ]
  const opinionCount = profile.opinionsReceived.length
  let opinionSum = 0

  profile.opinionsReceived.forEach(opinion => opinionSum += opinion.value)

  const profileRating = opinionCount ? opinionSum / opinionCount : 1
  
  const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
    const newValue = parseInt(evt.currentTarget.id)

    newValue > profileRating ? rateUp() : rateDown()

    handleOpinion({ value: newValue, profileId: profile.id, comment: comment })
  }

  const handleHover = (evt: React.MouseEvent): void => {
    if (evt.type === 'mouseover') {
      setHover(parseInt(evt.currentTarget.id))
    } else if (evt.type === 'mouseleave') {
      setHover(null)
    }
  }

  return (
    <section>
      {ratingOptions.map((rating): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          onClick={handleClick}
          onMouseOver={handleHover}
          onMouseLeave={handleHover}
          src={rating <= (hover ?? profileRating) ? bean : noBean}
          alt="Bean Symbol"
        />
      ))}
      <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment" />
    </section>
  )
}

export default OpinionManager