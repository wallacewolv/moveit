import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/wallacewolv.png" alt="Wallace Wesley"/>
      <div>
        <strong>Wallace Wesley</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}</p>
      </div>
    </div>
  );
}