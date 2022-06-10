import { useState } from 'react'
import './App.css'
import { Welcome } from './components/Welcome/Welcome'
import { Footer } from './layout/Footer/Footer'
import { Header } from './layout/Header/Header'
import { Main } from './layout/main/Main'

function App() {
  const [count, setCount] = useState(0)
  const title = 'MI JS CUSTOM 2';
  const subtitle = 'Subtitle 243242';


  return (
    <div className="App">
      <Header />

      <Main titleToMain={title}  subtitleTo={subtitle} stringToMain='Esto es una string' />

      <Footer />
    </div>
  )
}

export default App

// function data(dataRecibida) {
//   console.log(dataRecibida)
// }

// const saludo = 'Hola Mundo'
// data(saludo)
