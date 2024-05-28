import SecondFooter from "../SecondFooter"
const StartScreen = ({ handleStart }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <button onClick={handleStart} className="startButton">
      Розпочати тест
    </button>
  <div>
    <SecondFooter/>
  </div>
  </div>
)

export default StartScreen
