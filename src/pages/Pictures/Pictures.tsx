import { useEffect, useState } from 'react'
import axios from 'axios'

import { User } from '../../types/models'

import styles from './Pictures.module.css'

interface PicturesProps {
  user: User | null
}

const Pictures = ({ user }: PicturesProps) => {
  const [imageUrl, setImageUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/api/epics`)
        const { url, caption, date } = response.data
        setImageUrl(url)
        setCaption(caption)
        setDate(date)
      } catch (error) {
        console.log('Error fetching image data:', error)
      }
    }

    fetchImageData()
  }, [])

  if (!user) {
    return <p>Please log in to view the pictures.</p>
  }

  return (
    <div className={styles.container}>
      <h1>Hello, {user ? '🪐 ' + user.name + '! 🚀' : '🪐 Galactic Voyager! 🚀'}</h1>
      <div className={styles.epicContainer}>
        {imageUrl && (
          <div>
            <h2>Recent Natural Image</h2>
            <img className={styles.epicImage} src={imageUrl} alt="Recent Natural Image" />
            <p className={styles.caption}>{caption}</p>
            <p className={styles.date}>{date}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Pictures








//   return (
//     <main className={styles.container}>
//       <h1>Hello, {user ? user.name : '🪐 Galactic Voyager! 🚀'}</h1>

//       {epicData && (
//         <div className={styles.epicContainer}>
//           <img src={epicData.url} alt={epicData.caption} className={styles.epicImage} />
//           {epicData.caption && (
//             <h2 className={styles.epicCaption}>{epicData.caption}</h2>
//           )}
//         </div>
//       )}
//     </main>
//   )
// }

// export default Pictures