/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
//import { resultArray } from './result'
import api from '../api'
import FeedbackForm from './feedback'

const Results = ({ userAnswers = [], questions }) => {
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await api.getAnswersDiscrete()
        const answers = response.map((answer) =>({
          id: answer.id,
          text: answer.attributes.text,
          question_id: answer.attributes.question_id,
        }));
        setAnswers(answers)
      } catch (error) {
        console.log('fetchAnswers error', error)
      }
    }

    fetchAnswers()
  }, [])

  const correctAnswers = userAnswers.filter(userAnswer => {
    const matchingAnswer = answers.find(answer => Number(answer.id) === Number(userAnswer.answer_id))
    return matchingAnswer && Number(matchingAnswer.question_id) === Number(userAnswer.question_id)
  }).length

  /*
  const fetchAnswers = async () => {
    const data = await api.getAnswers()
    // console.log('fetchAnswers data', data)
    setAnswers(data)
  }

  useEffect(() => {
    fetchAnswers()
  }, [])

  // console.log('myAnswers', resultArray)
*/
  return (
    <div>
      <h2>Підсумок</h2>
      <p>
        Кількість правильних відповідей: {correctAnswers} / {questions.length}
      </p>
      <div>
      {questions.map((question, index) => {
  const correctAnswer = answers.find(answer => Number(answer.question_id) === Number(question.id));


  return (
    <div key={index}>
      <h3>Запитання {index + 1}</h3>
      <p>{question.question_text}</p>
      <ul>
      {question.answers.map((answer, ansIndex) => {
      const isUserAnswer = userAnswers.find(userAnswer => 
        Number(userAnswer.answer_id) === Number(answer.answer_id) && 
        Number(userAnswer.question_id) === Number(question.id)
      );
      const color = isUserAnswer ? 'white' : 'black';
      return(
        <li key={ansIndex} className="options" style={{color}}> 
          {answer.text_answer}
        </li>
  );  
})}
      </ul>
      <h3>
        {correctAnswer && <p style={{ color: 'green' }}>Правильна відповідь: {correctAnswer.text}</p>}
      </h3>
    </div>
  )
})}

      </div>
    <FeedbackForm/>
    </div>
  )
}
//До переробляння коду
// const Results = ({
//   questions,
//   userAnswers,
//   correctResponses,
//   setCurrentQuestionIndex,
//   setSelectedAnswerID,
//   setMyAnswers,
// }) => {
//   const countCorrectAnswers = () => {
//     let correctCount = 0
//     myAnswers.forEach((answer) => {
//       if (answer.answer === true) {
//         correctCount++
//       }
//     })
//     return correctCount
//   }

//   const restartTest = () => {
//     setCurrentQuestionIndex(0)
//     setSelectedAnswerID(null)
//     setMyAnswers([])
//   }

//   const correctAnswersCount = countCorrectAnswers()

//   return (
//     <div>
//       <h1>Підсумок</h1>
//       <h2>
//         <p>Кількість правильних відповідей: {correctAnswersCount}</p>
//       </h2>
//       <div>
//         {questions.map((question, index) => (
//           <div key={index}>
//             <p>{question.question_text}</p>
//             <ul>
//               {question.answer_id.map((answer, answerIndex) => {
//                 const userSelectedAnswer = userAnswers[index] === answer.text_answer
//                 const isCorrectAnswer = correctResponses[index] === answer.text_answer

//                 return (
//                   <li
//                     key={answerIndex}
//                     className="options"
//                     style={{ color: userSelectedAnswer && isCorrectAnswer ? '#8A4FFF' : 'red' }}
//                   >
//                     {answer.text_answer}
//                     {userSelectedAnswer && <span style={{ marginLeft: '5px' }}>- Ваша відповідь</span>}
//                   </li>
//                 )
//               })}
//             </ul>
//             <h3>
//               <p style={{ color: 'green' }}>Правильна відповідь: {question.question_id}</p>
//             </h3>
//           </div>
//         ))}
//       </div>
//       <button onClick={restartTest} className="againButton">
//         Спробувати ще раз
//       </button>
//     </div>
//   )
// }

export default Results
