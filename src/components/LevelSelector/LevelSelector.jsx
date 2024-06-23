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
      <Link to='/quiz'>
        <button>Primario</button>
      </Link>
      <Link to='/quiz'>
        <button>Secundario</button>
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
//       <Link to="/quiz">
//         <button>Primario</button>
//       </Link>
//       <Link to="/quiz">
//         <button>Secundario</button>
//       </Link>
//     </div>
//   );
// };

// export default LevelSelector;






// import styles from './LevelSelector.module.css';

// const LevelSelector = () => {
//   return (
//     <div className={styles.levelSelector}>
//       <button>Primario</button>
//       <button>Secundario</button>
//     </div>
//   );
// }

// export default LevelSelector;