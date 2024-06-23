import React, { useEffect, useState, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Question from '../Question/Question.jsx';
import { getQuestion } from '../../data/asyncMock.js';
import { ScoreContext } from '../../context/ScoreContext';
import { useNavigate } from 'react-router-dom';
import styles from './QuestionContainer.module.css';

const QuestionContainer = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { addPoints, score } = useContext(ScoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionData = await getQuestion();
        const shuffledQuestions = questionData.sort(() => Math.random() - 0.5);
        setQuestions(shuffledQuestions);
        console.log(shuffledQuestions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  const handleNextQuestion = (selectedOptions) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctOptions = currentQuestion.options.filter(option => option.correct);
    const incorrectOptions = currentQuestion.options.filter(option => !option.correct);

    const pointsPerCorrectOption = currentQuestion.pointsPerCorrectAnswer / correctOptions.length;
    const pointsPerIncorrectOption = pointsPerCorrectOption / 2; // La mitad de los puntos de una correcta

    let totalPoints = 0;

    selectedOptions.forEach(optionId => {
      const selectedOption = currentQuestion.options.find(option => option.id === optionId);
      console.log(selectedOption);
      console.log(currentQuestion)
      if (selectedOption.correct) {
        totalPoints += pointsPerCorrectOption;
      } else {
        totalPoints -= pointsPerIncorrectOption;
      }
    });

    addPoints(totalPoints);

    if (isLastQuestion) {
      navigate('/results');
    } else {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div>
      {/* <TransitionGroup>
        <CSSTransition
          key={currentQuestionIndex}
          timeout={300}
          classNames={{
            enter: styles.fadeEnter,
            enterActive: styles.fadeEnterActive,
            exit: styles.fadeExit,
            exitActive: styles.fadeExitActive,
          }}
        > */}
          <div>
            {questions.length > 0 ? (
              <Question
                {...questions[currentQuestionIndex]}
                onNext={handleNextQuestion}
              />
            ) : (
              <p>Cargando...</p>
            )}
          </div>
        {/* </CSSTransition>
      </TransitionGroup> */}
    </div>
  );
};

export default QuestionContainer;