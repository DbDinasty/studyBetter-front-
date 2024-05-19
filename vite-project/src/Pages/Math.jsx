import { useState } from 'react'
import api from '../api'
import { StartScreen, ContinueButton, Question, Results, RestartButton } from '../components'

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
    const myAnswer = { questionID: question.id, answer: isTrue }

    setMyAnswers((prew) => [...prew, myAnswer])

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  // Needs to rewrite
  if (!isLoading && questions.length === 0) {
    return <StartScreen handleStart={handleStart} />
  }

  const question = questions[currentQuestionIndex]
  const disabled = selectedAnswerID === null

  if (currentQuestionIndex === questions.length) {
    return (
      <div>
        <Results myAnswers={myAnswers} questions={questions} />
        <RestartButton
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          setSelectedAnswerID={setSelectedAnswerID}
          setMyAnswers={setMyAnswers}
        />
      </div>
    )
  }

  return (
    <div>
      <Question question={question} index={currentQuestionIndex} handleAnswerSelect={handleAnswerSelect} />
      <ContinueButton onClick={handleNextQuestion} disabled={disabled} />
    </div>
  )
}
