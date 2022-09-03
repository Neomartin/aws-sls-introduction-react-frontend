import { Button, Col, Form, Input, Row, Space, notification, Modal } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfirmUser } from '../../components/ConfirmUser/ConfirmUser'
import { Register } from '../../components/Register/register'
import { useAuth } from '../../services/Auth/AuthContext'
import { UsersTable } from './UsersTable/UsersTable'

const URL = `http://localhost:3400/api`;

export const Login = () => {
  const [user, setUser] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate()
  const setModalVisible = (value, modalContent) => {
    setIsModalVisible(value);
    setModalContent(modalContent);
  }
  const openNotification = (message, description, type) => {
    notification[type]({
      message: message,
      description: description,
      placement: 'top',
    });
  };

  const handleSubmitFinish = async (formData) => {
    try {
      auth.login(formData);
      // openNotification(`Login correcto`, `Login correctisimo dsadasdsa das`, 'success');
      // navigate('/', { replace: true })
    } catch (error) {
      openNotification(`Login incorrecto`, `No se pudo loguear`, 'error')
    }
  }

  const registerUser = async (formData) => {
    try {
      setModalVisible(false);
      const resp = await axios.post(`https://j0w24jl69b.execute-api.us-east-1.amazonaws.com/dev/api/test`, formData, {
        headers: {
          Authorization: auth.token
        }
      });
      console.log(resp)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <Row justify='center' className='p-lg'>
        <Col span={16}>

          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={handleSubmitFinish}>
            <Form.Item label='Correo Electrónico' name='Username' rules={[
              { required: true, message: 'El email es requerido' },
              { min: 3, message: `La longitud debe ser de al menos 3 caracteres` },
              // { type: 'email', message: `El correo debe ser válido` },
            ]}>
              <Input minLength={3} />
            </Form.Item>
            <Form.Item label='Contraseña' name='Password'>
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
      <Space size={'middle'}>
        
        <a type='secondary' onClick={() => setModalVisible(true, 'confirmUser')}>Confirmar Usuario</a>
        <a type='secondary' onClick={() => setModalVisible(true, 'register')}>
          Registrar!
        </a>
      </Space>
      <Modal title="Basic Modal" visible={isModalVisible} onCancel={() => setModalVisible(false)}>
        {modalContent === 'register' && <Register onCancel={setModalVisible} registerUser={registerUser} modal={true} />}
        {modalContent === 'confirmUser' && <ConfirmUser />}
      </Modal>
     
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
