import { Button, Col, Form, Input, Row, Space, notification } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
// import { useRef } from 'react';
// import { useState } from 'react';

const URL = `http://localhost:3400/api`

export const Login = () => {
  const [user, setUser] = useState(null)

  const openNotification = (message, description, type) => {
    notification[type]({
      message: message,
      description: description,
      placement: 'top',
    });
  };

  const handleSubmitFinish = async (formData) => {
    try {
      // const loginData = values;
      const response = await axios.post(`${URL}/login`, formData );
      console.log(response);
      const user = response.data.user;
      const token = response.data.token;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token)
      setUser(user);
      openNotification(`Login correcto`, `Login correctisimo dsadasdsa das`, 'success')
    } catch (error) {
      openNotification(`Login incorrecto`, `No se pudo loguear`, 'error') 
    }
    

  }

  

  return (
    <>
    <Row justify='center' className='p-lg'>
      <Col span={16}>

      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={handleSubmitFinish}>
        <Form.Item label='Correo Electrónico' name='email' rules={[
          { required: true, message: 'El email es requerido' },
          { min: 3, message: `La longitud debe ser de al menos 3 caracteres`},
          { type: 'email', message: `El correo debe ser válido`},
        ]}>
          <Input type='email' minLength={3}/>
        </Form.Item>
        <Form.Item label='Contraseña'name='password'>
          <Input type='password' />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 8, offset: 16 }}>
          <Button htmlType='submit' type='primary'>
            Ingresar
          </Button>
        </Form.Item>
      </Form>
      </Col>
    </Row>
      
    </>
  )
}



// ========= FORMA 1 =============
// export const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   console.log(`Renderizado nuevamente`)

//   console.log(`Email actual: ${email}`, `Password actual: ${password}`)

//   function handleLogin() {
//     const loginData = {
//       email,
//       password
//     }

//     console.log(loginData)
//   }

//   return (
//     <div>
//       <h1>LOGIN COMPONENT</h1>
//       <Row justify='center'>
//         <Col span={12}>
//             {/* <Space direction='vertical' size='large'> */}
//           <Row justify='center'>
//             <Col xs={24} className='mb-lg'>
//               <label htmlFor="email">Correo Electrónico</label> <br />
//               <Input type="text" id="email" maxLength={30} minLength={2} placeholder='pepi@gmail.com' 
//                      onChange={(evt) => setEmail(evt.target.value)}/>
//             </Col>

//             <Col xs={24} className='mb-lg'>
//               <label htmlFor="password">Contraseña</label> <br />
//               <Input type="password" id="password" maxLength={30} minLength={2} placeholder='password' onChange={(evt) => setPassword(evt.target.value)}/>
//             </Col>
//           </Row>
//           <Col>
//             <Button type="primary" onClick={() => handleLogin()}>Ingresar</Button>
//           </Col>
//             {/* </Space> */}
//         </Col>
//       </Row>

//     </div>
//   )
// }

// ========= FORMA 2 =============
// export const Login = () => {
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();

//   console.log(`Renderizado nuevamente`)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(e);
//     const loginData = {
//       email: emailInputRef.current.input.value,
//       password: passwordInputRef.current.input.value
//     }
//     console.log(loginData)
//   }

//   return (
//     <div>
//       <h1>LOGIN COMPONENT</h1>
//       <form onSubmit={handleSubmit}>
//         <Row justify='center'>
//           <Col span={12}>
//             {/* <Space direction='vertical' size='large'> */}
//             <Row justify='center'>
//               <Col xs={24} className='mb-lg'>
//                 <label>Correo Electrónico</label> <br />
//                 <Input type="text" ref={emailInputRef} />
//               </Col>

//               <Col xs={24} className='mb-lg'>
//                 <label>Contraseña</label> <br />
//                 <Input type="password" ref={passwordInputRef} />
//               </Col>
//             </Row>
//             <Col>
//               <Button htmlType='submit'>Ingresar</Button>
//               {/* <button>Ingresar 2</button> */}
//             </Col>
//             {/* </Space> */}
//           </Col>
//         </Row>
//       </form>

//     </div>
//   )
// }


// ========= FORMA 3 =============
// export const Login = () => {

//   console.log(`Renderizado nuevamente`)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let loginData = new FormData(e.target)
//     loginData = Object.fromEntries(loginData);
//     console.log(loginData)
//   }



//   return (
//     <div>
//       <h1>LOGIN COMPONENT</h1>
//       <form onSubmit={handleSubmit}>
//         <Row justify='center'>
//           <Col span={12}>
//             {/* <Space direction='vertical' size='large'> */}
//             <Row justify='center'>
//               <Col xs={24} className='mb-lg'>
//                 <label>Correo Electrónico</label> <br />
//                 {/* <Input type="text" /> */}
//                 <input type="email" name='email' />
//               </Col>

//               <Col xs={24} className='mb-lg'>
//                 <label>Contraseña</label> <br />
//                 {/* <Input type="password" /> */}
//                 <input type="password" name='password' />
//               </Col>
//             </Row>
//             <Col>
//               <Button htmlType='submit'>Ingresar</Button>
//               {/* <button>Ingresar 2</button> */}
//             </Col>
//             {/* </Space> */}
//           </Col>
//         </Row>
//       </form>

//     </div>
//   )
// }
