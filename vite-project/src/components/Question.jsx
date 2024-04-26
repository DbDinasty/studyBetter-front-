const Question = ({ question, index, handleAnswerSelect }) => {
  const answers = question.answer_id

  const handleAnswer = (id) => {
    console.log('Answer ID: ', id)
    handleAnswerSelect(id)
  }

  const answersMap = answers.map((answer) => (
    <li key={answer.id}>
      <button onClick={() => handleAnswer(answer.answer_id)} className="options">
        {answer.text_answer}
      </button>
    </li>
  ))

  return (
    <>
      <h3>Запитання {index + 1}</h3>
      <h3>{question.question_text}</h3>
      <ul>{answersMap}</ul>
    </>
  )
}

export default Question
