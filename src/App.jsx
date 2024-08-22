import { useState } from 'react'
import './App.css'
import Start from "./components/Start"
import FirstQuiz from './components/FirstQuiz'


function App() {

  const [isQuiz, setIsQuiz] = useState(false)

  function startQuiz() {
    setIsQuiz(!isQuiz)
  }

  return (
    <main>
      {!isQuiz
        ?
        <Start 
          startQuiz = {startQuiz}
        />
        : 
        <FirstQuiz 
          startQuiz={startQuiz}
        />
       } 
    </main>
  )
}

export default App
