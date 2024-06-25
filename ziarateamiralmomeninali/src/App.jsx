import './App.css'
import MyText from './MyText.jsx'
import haram from './assets/haram-najaf.jpg'

function App() {

  return (
    <div>
      <img src={haram} alt='حرم امیرالمومنین علی علیه السلام' style={{ width: '25%', height: 'auto' }} />

      <h1>زیارت امیرالمومنین علی علیه السلام در روز غدیر</h1>
      <MyText />
    </div>
  )
}

export default App
