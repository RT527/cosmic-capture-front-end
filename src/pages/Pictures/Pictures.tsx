import React, { useEffect, useState } from 'react'
import styles from './Pictures.module.css'
import { User } from '../../types/models'

interface PicturesProps {
  user: User | null
}

interface EpicData {
  url: string
  caption: string
}

const Pictures: React.FC<PicturesProps> = ({ user }) => {
  const [epicData, setEpicData] = useState<EpicData | null>(null)

  useEffect(() => {
    fetchMostRecentEpicImage()
  }, [])

  const fetchMostRecentEpicImage = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/epic/image')
      if (response.ok) {
        const data = await response.json()
        setEpicData({ url: data.url, caption: data.caption })
      } else {
        console.error('Error fetching EPIC image:', response.status, response.statusText)
      }
    } catch (error) {
      console.error('Error fetching EPIC image:', error)
    }
  }

  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : '🪐 Galactic Voyager! 🚀'}</h1>

      {epicData && (
        <div className={styles.epicContainer}>
          <img src={epicData.url} alt={epicData.caption} className={styles.epicImage} />
          {epicData.caption && (
            <h2 className={styles.epicCaption}>{epicData.caption}</h2>
          )}
        </div>
      )}
    </main>
  )
}

export default Pictures