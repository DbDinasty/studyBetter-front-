import axios from 'axios'

const API_URL = 'http://localhost:1337/api'

const getQuestions = async () => {
  try {
    const response = await axios.get(`${API_URL}/test-pages/1?populate[testBody][populate]=*`)
    return response.data.data.attributes.testBody
  } catch (error) {
    console.log('getQuestions error', error)
  }
}

const getAnswerByID = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/answers/${id}`)
    console.log('response', response)
    return response.data.data.attributes.question_id
  } catch (error) {
    console.log('getAnswerByID error', error)
  }
}
// http://localhost:1337/api/answers/2?fields[0] = question_id

export default { getQuestions, getAnswerByID }
