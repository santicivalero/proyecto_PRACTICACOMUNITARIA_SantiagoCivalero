import React, { createContext, useState } from 'react';

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [answers, setAnswers] = useState([]);

  const addPoints = (points, question, selectedOptions) => {
    setScore(prevScore => Math.max(0, (prevScore + points).toFixed(2)));
    setAnswers(prevAnswers => [
      ...prevAnswers,
      {
        ...question,
        selectedOptions,
        pointsObtained: points,
      }
    ]);
  };

  const resetScore = () => {
    setScore(0);
    setAnswers([]);
  };

  const saveScoreToLocalStorage = () => {
    const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    const updatedPlayers = storedPlayers.map(player => 
      player.name === playerName ? { ...player, score } : player
    );
    localStorage.setItem('players', JSON.stringify(updatedPlayers));
  };

  return (
    <ScoreContext.Provider value={{ score, addPoints, resetScore, playerName, setPlayerName, saveScoreToLocalStorage, answers }}>
      {children}
    </ScoreContext.Provider>
  );
};







// import React, { createContext, useState } from 'react';

// export const ScoreContext = createContext();

// export const ScoreProvider = ({ children }) => {
//   const [score, setScore] = useState(0);
//   const [playerName, setPlayerName] = useState('');
//   const [selectedAnswers, setSelectedAnswers] = useState([]);

//   const addPoints = (points) => {
//     setScore(prevScore => Math.max(0, (prevScore + points).toFixed(2)));
//   };

//   const resetScore = () => {
//     setScore(0);
//     setSelectedAnswers([]);
//   };

//   const saveSelectedAnswer = (questionId, selectedOptions) => {
//     setSelectedAnswers(prevAnswers => [...prevAnswers, { questionId, selectedOptions }]);
//   };

//   const saveScoreToLocalStorage = () => {
//     const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
//     const updatedPlayers = storedPlayers.map(player => 
//       player.name === playerName ? { ...player, score } : player
//     );
//     localStorage.setItem('players', JSON.stringify(updatedPlayers));
//   };

//   return (
//     <ScoreContext.Provider value={{ score, addPoints, resetScore, playerName, setPlayerName, saveScoreToLocalStorage, selectedAnswers, saveSelectedAnswer }}>
//       {children}
//     </ScoreContext.Provider>
//   );
// };




