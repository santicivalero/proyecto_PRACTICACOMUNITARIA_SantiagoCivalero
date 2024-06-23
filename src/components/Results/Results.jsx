import React, { useContext, useState, useEffect } from 'react';
import { ScoreContext } from '../../context/ScoreContext';
import { Link } from 'react-router-dom';
import { getQuestion } from '../../data/asyncMock.js';

const Results = () => {
  const { score } = useContext(ScoreContext);
  const [questionLength, setQuestionLength] = useState(null);

  useEffect(() => {
    const fetchQuestionLength = async () => {
      const questionData = await getQuestion();
      setQuestionLength(questionData.length);
    };

    fetchQuestionLength();
  }, []);

  return (
    <div>
      <h2>Resultados Finales</h2>
      <span>Tu puntaje final es: </span> 
      {questionLength === null ? (
        <span>...</span>
      ) : (
        <span>{score}/{questionLength}</span>
      )}
      <div>
        <Link to="/">Volver a la selección de nivel</Link>
      </div>
    </div>
  );
};

export default Results;






// import React, { useContext } from 'react';
// import { ScoreContext } from '../../context/ScoreContext';
// import { Link } from 'react-router-dom';
// import { getQuestion } from '../../data/asyncMock.js';

// const Results = () => {
//   const { score } = useContext(ScoreContext);

//   return (
//     <div>
//       <h2>Resultados Finales</h2>
//       <p>Tu puntaje final es: {score}/{questionLength}</p>
//       <Link to="/">Volver a la selección de nivel</Link>
//     </div>
//   );
// }

// export default Results;
