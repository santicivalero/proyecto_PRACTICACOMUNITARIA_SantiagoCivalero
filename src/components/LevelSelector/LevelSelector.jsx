import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScoreContext } from '../../context/ScoreContext';
import styles from './LevelSelector.module.css';

const LevelSelector = () => {
  const { resetScore } = useContext(ScoreContext);

  useEffect(() => {
    resetScore();
  }, [resetScore]);

  return (
    <div className={styles.levelSelector}>
      <Link to='/playername'>
        <button className={styles.levelButton}>Primario</button>
      </Link>
      <Link to='/playername'>
        <button className={styles.levelButton}>Secundario</button>
      </Link>
    </div>
  );
};

export default LevelSelector;





// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { ScoreContext } from '../../context/ScoreContext';
// import styles from './LevelSelector.module.css';

// const LevelSelector = () => {
//   const { resetScore } = useContext(ScoreContext);

//   useEffect(() => {
//     resetScore();
//   }, [resetScore]);

//   return (
//     <div className={styles.levelSelector}>
//       <Link to='/playername'>
//         <button>Primario</button>
//       </Link>
//       <Link to='/playername'>
//         <button>Secundario</button>
//       </Link>
//     </div>
//   );
// };

// export default LevelSelector;