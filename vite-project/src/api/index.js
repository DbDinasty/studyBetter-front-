import axios from 'axios'

const API_URL = 'http://localhost:1337/api'

const getQuestionsMath = async () => {
  try {
    const response = await axios.get(`${API_URL}/test-pages/1?populate[testBody][populate]=*&populate[testBody][limit]=40`)
    return response.data.data.attributes.testBody
  } catch (error) {
    console.log('getQuestionsMath error', error)
  }
}
const getQuestionsDiscrete = async () => {
  try {
    const response = await axios.get(`${API_URL}/test-pages/2?populate[testBody][populate]=*&populate[testBody][limit]=40`)
    return response.data.data.attributes.testBody
  } catch (error) {
    console.log('getQuestionsDescrete error', error)
  }
}

const getAnswersMath = async () => {
  try {
    const response = await axios.get(`${API_URL}/answers?filters[question_id][$not]=null&pagination[limit]=40`)
    console.log('answers RESP: ', response)
    return response.data.data
  } catch (error) {
    console.log('getAnswers error', error)
  }
}
const getAnswersDiscrete = async () => {
  try {
    const response = await axios.get(`${API_URL}/answers?filters[question_id][$not]=null&pagination[start]=40&pagination[limit]=40`)
    console.log('answers RESP: ', response)
    return response.data.data
  } catch (error) {
    console.log('getAnswers error', error)
  }
}

//   try {
//     const response = await axios.get(`${API_URL}/answers/${id}`)
//     console.log('response', response)
//     return response.data.data.attributes.question_id
//   } catch (error) {
//     console.log('getAnswerByID error', error)
//   }
// }

export default { getQuestionsMath, getAnswersMath, getQuestionsDiscrete, getAnswersDiscrete}
