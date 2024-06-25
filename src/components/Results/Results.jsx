import React, { useContext, useState, useEffect } from 'react';
import { ScoreContext } from '../../context/ScoreContext';
import { Link } from 'react-router-dom';
import styles from './Results.module.css';
import { getQuestion } from '../../data/asyncMock.js';

const Results = () => {
  const { score, playerName, saveScoreToLocalStorage } = useContext(ScoreContext);
  const [questionLength, setQuestionLength] = useState(null);

  useEffect(() => {
    const fetchQuestionLength = async () => {
      const questionData = await getQuestion();
      setQuestionLength(questionData.length);
    };

    fetchQuestionLength();
  }, []);

  useEffect(() => {
    if (playerName && score >= 0) {
      saveScoreToLocalStorage();
    }
  }, [score, playerName, saveScoreToLocalStorage]);

  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.title}>Resultados Finales</h2>
      <div className={styles.scoreContainer}>
        <span className={styles.label}>Tu puntaje final es: </span>
        {questionLength === null ? (
          <span className={styles.score}>...</span>
        ) : (
          <span className={styles.score}>{score}/{questionLength}</span>
        )}
      </div>
      <div className={styles.linkContainer}>
      <Link to="/scorelist" className={styles.link}>Ranking</Link>
      </div>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.link}>Volver a la selección de nivel</Link>
      </div>
    </div>
  );
};

export default Results;








// import React, { useContext, useState, useEffect } from 'react';
// import { ScoreContext } from '../../context/ScoreContext';
// import { Link } from 'react-router-dom';
// import { getQuestion } from '../../data/asyncMock.js';

// const Results = () => {
//   const { score } = useContext(ScoreContext);
//   const [questionLength, setQuestionLength] = useState(null);

//   useEffect(() => {
//     const fetchQuestionLength = async () => {
//       const questionData = await getQuestion();
//       setQuestionLength(questionData.length);
//     };

//     fetchQuestionLength();
//   }, []);

//   return (
//     <div>
//       <h2>Resultados Finales</h2>
//       <span>Tu puntaje final es: </span> 
//       {questionLength === null ? (
//         <span>...</span>
//       ) : (
//         <span>{score}/{questionLength}</span>
//       )}
//       <div>
//         <Link to="/">Volver a la selección de nivel</Link>
//       </div>
//     </div>
//   );
// };

// export default Results;
