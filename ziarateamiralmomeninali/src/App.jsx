import './App.css'
import MyText from './MyText'
import haram from './assets/haram-najaf.jpg'

function App() {

  return (
    <div>
      <img src={haram} alt='حرم امیرالمومنین علی علیه السلام'/>

      <h1>زیارت امیرالمومنین علی علیه السلام در روز غدیر</h1>
      <MyText />
    </div>
  )
}

export default App
