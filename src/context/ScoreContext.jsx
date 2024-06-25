import React, { createContext, useState } from 'react';

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState('');

  const addPoints = (points) => {
    setScore(prevScore => Math.max(0, (prevScore + points).toFixed(2)));
  };

  const resetScore = () => {
    setScore(0);
  };

  const saveScoreToLocalStorage = () => {
    const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    const updatedPlayers = storedPlayers.map(player => 
      player.name === playerName ? { ...player, score } : player
    );
    localStorage.setItem('players', JSON.stringify(updatedPlayers));
  };

  return (
    <ScoreContext.Provider value={{ score, addPoints, resetScore, playerName, setPlayerName, saveScoreToLocalStorage }}>
      {children}
    </ScoreContext.Provider>
  );
};







// import React, { createContext, useState } from 'react';

// export const ScoreContext = createContext();

// export const ScoreProvider = ({ children }) => {
//   const [score, setScore] = useState(0);

//   const addPoints = (points) => {
//     setScore(prevScore => Math.max(0, (prevScore + points).toFixed(2)));
//   };

//   const resetScore = () => {
//     setScore(0);
//   };

//   return (
//     <ScoreContext.Provider value={{ score, addPoints, resetScore }}>
//       {children}
//     </ScoreContext.Provider>
//   );
// };


