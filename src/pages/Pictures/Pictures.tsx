import { useEffect, useState } from 'react';
import axios from 'axios';

import { User } from '../../types/models';

import styles from './Pictures.module.css';

interface PicturesProps {
  user: User | null;
}

const Pictures = ({ user }: PicturesProps) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/api/epics`);
        setImageUrl(response.data.url);
      } catch (error) {
        console.log('Error fetching image URL:', error);
      }
    };

    fetchImageUrl();
  }, []);

  if (!user) {
    return <p>Please log in to view the pictures.</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Recent Natural Image</h1>
      <h1>Hello, {user ? '🪐 ' + user.name + '! 🚀' : '🪐 Galactic Voyager! 🚀'}</h1>
      {imageUrl && (
        <div className={styles.epicContainer}>
          <img className={styles.epicImage} src={imageUrl} alt="Recent Natural Image" />
        </div>
      )}
    </div>
  );
};

export default Pictures;








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

// export default Pictures;