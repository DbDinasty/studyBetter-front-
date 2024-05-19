const RestartButton = ({ setCurrentQuestionIndex, setSelectedAnswerID, setMyAnswers }) => {
  const restartTest = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswerID(null)
    setMyAnswers([])
  }

  return (
    <button onClick={restartTest} className="againButton">
      Спробувати ще раз
    </button>
  )
}

export default RestartButton
