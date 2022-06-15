import axios from 'axios';
import { useEffect, useState, Fragment } from 'react'
import './App.css'
import { Footer } from './layout/Footer/Footer'
import { Header } from './layout/Header/Header'
import { Main } from './layout/main/Main';

const URL = `https://rc-newapp.herokuapp.com/api`;

const usersConst = [
  { fullName: 'Usuario 1', age: 67 },
  { fullName: 'Another user 09', age: 27 },
  { fullName: 'Pedrito', age: 37 },
  { fullName: 'Jose', age: 7 }
]

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhkNmZjNDFiMjk1Y2I3MzVjMmQxMzIiLCJmdWxsTmFtZSI6IkRhbmllbCIsImVtYWlsIjoiZGFuaWVsQGdtYWlsLmNvbSIsImFjdGl2ZSI6dHJ1ZSwicm9sZSI6IkNMSUVOVF9ST0xFIiwiYWdlIjo1OSwiX192IjowLCJpYXQiOjE2NTUyNTE3NzB9.CIby2MOXXT_tdjf3EovemeEjF9VF1fz8HZnZcJVW2yc`

function App() {
  // const user = {
  //   name: `Pepe`,
  //   lastName: `Villegas`,
  //   age: 45
  // }

  // const { lastName, age, name: firstName } = user
  // const array = [`Chivalert`, 1980, `Velez`]
  // const [ arquero, equipo,  ] = array

  //**Modo largo/extenso */
  // const nameState = useState('')
    //  ['', fn]
  // const name = nameState[0];
  // const setName = nameState[1];
  const [ name , setName ] = useState('')
  const [ count, setCount ] = useState(0)
  const [ users, setUsers ] = useState(usersConst)
  

  // Se ejecuta una vez se cargo todo el VDOM
  useEffect(function() {
    console.log(`UseEffect`)
    getUsers();
  }, []) // Condición mediante la cual se va a volver a ejecutar el useEffect, si esta vacío se ejecuta una única vez al cargarse el componente

  async function getUsers() {
    const response = await axios.get(`${URL}/users`, {
      headers: {
        'Authorization': token
      }
    })
    console.log(response.data.users);
    const usersDB = response.data.users;
    setUsers(usersDB)
  }
  

  function updateNameOnKeyUp(event) {
    const value = event.target.value;
    setName(value)
  }

  

  function incrementCounter() {
    setCount(count + 5)
  }

  function decrementCounter() {
    setCount(count - 5)
  }


  const title = 'MI JS CUSTOM 2';
  const subtitle = 'Subtitle 243242';
  

  return (
    <div className="App">
      <Header />
      <h3>Nombre ingresado: {name}</h3>
      <h1>Cuenta: {count}</h1>
      <button onClick={()=> incrementCounter()}>+</button>
      <button onClick={()=> decrementCounter()}>-</button>
      <div>
      <label htmlFor="name"></label>
      <input id="name" type="text" onKeyUp={(evt) => updateNameOnKeyUp(evt)} />
      </div>

      {
        
        users.map(usr => {
  
          console.log(`Map iniciado`);
          return (
            <>
              <h4 key={usr._id}>{usr.fullName}</h4>
              <a href={`mailto:${usr.email ?? 'noexiste'}`}>{usr.email ?? 'noexiste'}</a>
              <hr />
            </>
          )
        })
      }


      {/* <div>
        <p>
          Arquero: {arquero}
        </p>

          <p>Equipo: {equipo}</p>
      </div>
      <div>OBJETO: {firstName}</div>
      <div>EDAD: {age}</div> */}
      <Main titleToMain={title}  subtitleTo={subtitle} stringToMain='Esto es una string' />

      <Footer nameToFooter={name}/>
    </div>
  )
}

export default App

// function data(dataRecibida) {
//   console.log(dataRecibida)
// }

// const saludo = 'Hola Mundo'
// data(saludo)
