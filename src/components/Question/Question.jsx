import React, { useState } from 'react';
import { useEffect } from 'react';

const Question = ({ title, options, onNext, timerExpired }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Reiniciar selectedOptions cuando cambia la pregunta
  useEffect(() => {
    setSelectedOptions([]);
  }, [title]); // Dependencia title para detectar cambio de pregunta

  const handleOptionChange = (event) => {
    const optionId = parseInt(event.target.value);
    setSelectedOptions(prevSelectedOptions =>
      prevSelectedOptions.includes(optionId)
        ? prevSelectedOptions.filter(id => id !== optionId)
        : [...prevSelectedOptions, optionId]
    );
  };

  const handleNextClick = () => {
    onNext(selectedOptions);
  };

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <label>
              <input
                type="checkbox"
                value={option.id}
                checked={selectedOptions.includes(option.id)}
                onChange={handleOptionChange}
              />{' '}
              {option.answerText.startsWith('../') ? (
                <img src={option.answerText} alt="option" width="150" height="150" />
              ) : (
                option.answerText
              )}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextClick} disabled={selectedOptions.length === 0}>
        Siguiente
      </button>
    </div>
  );
};

export default Question;