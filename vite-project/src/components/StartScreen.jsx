const StartScreen = ({ handleStart }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <button onClick={handleStart} className="startButton">
      Розпочати тест
    </button>
  </div>
)

export default StartScreen
