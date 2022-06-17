
import axios from 'axios';
import { useEffect, useState, Fragment } from 'react'

// import { Footer } from './layout/Footer/Footer'
import { HeaderContent } from './layout/Header/Header'
import { Main } from './pages/Main/Main';
import { Layout } from 'antd';
import './App.css'
import { Contact } from './pages/Contact/Contact';
import { Users } from './pages/Users/Users';

const { Header, Footer, Sider, Content } = Layout;
// const URL = `https://rc-newapp.herokuapp.com/api`;

function App() {
  
  const title = 'MI JS CUSTOM 2';
  const subtitle = 'Subtitle 243242';


  return (
    <div className="App">
      <Layout>
        <Header>
          <HeaderContent />
        </Header>
        <Layout>
          <Sider>Sidebar</Sider>
          <Content>
            {/* <Main users={users} title={title} subtitle={subtitle} />  */}
            {/* <Contact />   */}
            <Users />
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
