import { useState } from 'react'
import api from '../api'
import { StartScreen, ContinueButton, Question } from '../components'

export default function Math() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswerID, setSelectedAnswerID] = useState(null)
  const [myAnswers, setMyAnswers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchQuestions = async () => {
    const data = await api.getQuestions()
    console.log('fetchQuestions data', data)
    setQuestions(data)
  }

  const handleStart = () => {
    fetchQuestions()
    setIsLoading(false)
  }

  const handleAnswerSelect = (id) => {
    setSelectedAnswerID(id)
  }

  const handleNextQuestion = async () => {
    const answerData = await api.getAnswerByID(selectedAnswerID)

    const question = questions[currentQuestionIndex]

    const isTrue = Number(question.id) === Number(answerData)
    console.log('Is True?:', isTrue)
    const myAnswer = { questionID: question.id, answer: isTrue }

    setMyAnswers((prew) => [...prew, myAnswer])

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)

    console.log('myAnswers', myAnswers)
  }
  // В компоненти
  const restartTest = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswerID(null)
    setMyAnswers([])
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  // Needs to rewrite
  if (!isLoading && questions.length === 0) {
    return <StartScreen handleStart={handleStart} />
  }
  // В компоненти
  // if (currentQuestionIndex === questions.length) {
  //   return (
  //     <div>
  //       <h1>Підсумок</h1>
  //       <h2>
  //         <p>Кількість правильних відповідей: {correctAnswers}</p>
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
  //               <p style={{ color: 'green' }}>Правильна відповідь: {correctResponses[index]}</p>
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

  const question = questions[currentQuestionIndex]
  const disabled = selectedAnswerID === null

  return (
    <div>
      <Question question={question} index={currentQuestionIndex} handleAnswerSelect={handleAnswerSelect} />
      <ContinueButton onClick={handleNextQuestion} disabled={disabled} />
    </div>
  )
}
