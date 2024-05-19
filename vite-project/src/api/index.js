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

const getAnswers = async () => {
  try {
    const response = await axios.get(`${API_URL}/answers?pagination[limit]=61`)
    console.log('answers RESP: ', response)
    return response.data.data
  } catch (error) {
    console.log('getAnswers error', error)
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

export default { getQuestions, getAnswerByID, getAnswers }
