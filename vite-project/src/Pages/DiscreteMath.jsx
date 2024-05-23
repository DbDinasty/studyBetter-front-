import { useState } from 'react'
import api from '../api'
import { StartScreen, ContinueButton, Question, ResultsDiscrete, RestartButton } from '../components'

export default function Math() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswerID, setSelectedAnswerID] = useState(null)
  const [userAnswers, setuserAnswers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchQuestions = async () => {
    const data = await api.getQuestionsDiscrete()
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

  const handleNextQuestion =  () => {
    if (selectedAnswerID === null) {
      alert('Please select an answer before continuing.');
      return;
    }

    const question = questions[currentQuestionIndex]
    const userAnswers = { question_id: question.id, answer_id: selectedAnswerID }
    
    setuserAnswers((prew) => [...prew, userAnswers])
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    setSelectedAnswerID(null) 
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
        <ResultsDiscrete userAnswers={userAnswers} questions={questions} />
        <RestartButton
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          setSelectedAnswerID={setSelectedAnswerID}
          setuserAnswers={setuserAnswers}
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
