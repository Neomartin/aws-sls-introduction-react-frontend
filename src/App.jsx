import { HeaderContent } from './layout/Header/Header'
import { Layout } from 'antd';
import './App.css'

// Pages components
import { Contact } from './pages/Contact/Contact';
import { Main } from './pages/Main/Main';
import { Users } from './pages/Users/Users';
const { Header, Footer, Sider, Content } = Layout;
import { Routes, Route, Link } from "react-router-dom"
import { NotFound } from './pages/NotFound/NotFound';
import { Login } from './pages/Login/Login';
import { Sidebar } from './layout/sidebar/Sidebar';
import { PrivateRoute } from './routers/PrivateRoute';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))


  const title = 'MI JS CUSTOM 2';
  const subtitle = 'Subtitle 243242';


  return (
    <div className="App">
      <Layout>
        <Header>
          <HeaderContent />
        </Header>
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Content>
            <Routes>
              <Route path='/' 
                    element={<PrivateRoute><Main title={title} subtitle={subtitle} /></PrivateRoute>
              } />
              <Route path='users' element={<PrivateRoute> <Users/> </PrivateRoute>} />
              <Route path='contact' element={<Contact />} />
              <Route path='login' element={<Login /> } />
              <Route path='*' element={<PrivateRoute><NotFound /></PrivateRoute> } />
            </Routes>
            
            
            {/* <Users /> */}
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default App

// function data(dataRecibida) {
//   console.log(dataRecibida)
// }

// const saludo = 'Hola Mundo'
// data(saludo)
