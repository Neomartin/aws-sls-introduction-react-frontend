import { Button, Col, Form, Input, InputNumber, notification, Row } from 'antd'
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js'
import React from 'react'
import { useAuth } from '../../services/Auth/AuthContext';

const POOL_DATA = {
    ClientId: '1jfmni2vt21hhpdq509d9o74on',
    UserPoolId: 'us-east-1_CekI6ywcl'
};
const userPool = new CognitoUserPool(POOL_DATA);

export const Register = ({modal, ...props}) => {

    const auth = useAuth()
    const registerUser = async (formData) => {
        console.log(formData)
        try {
            const emailAttribute = {
                Name: 'email',
                Value: formData.email
            }
            const attrList = [];
            attrList.push(new CognitoUserAttribute(emailAttribute));

            userPool.signUp(formData.user, formData.password, attrList, null, (err, resp) => {
                if (err) return console.log(err)
                auth.setUser(resp.user);
                notification.success({
                    message: 'Usuario confirmado!',
                    description: 'Ahora puede loguearse con su usuario y contraseña',
                    duration: 2,
                    placement: 'top'
                });
                if(props.onCancel) props.onCancel()
            })
        } catch (error) {
            console.log(`Error en cognito`, error)
        }
    }

    return (
        <>
            <Row>
                <Col span={modal ? 24 : 16} offset={modal ? 0 : 4} className="p-lg">
                    <h1>Registrarse</h1>
                    <Form name='register' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={registerUser}>
                        <Form.Item label="Nombre y Apellido" name="user" rules={[{ required: true, message: 'Por favor ingrese nombre completo' }]}>
                            <Input maxLength={30} />
                        </Form.Item>
                        <Form.Item label="Edad" name="age"
                            rules={[
                                { required: true, message: 'Por favor ingrese su edad' },
                                { min: 12, max: 110, message: 'La edad no es correcta! Debe tener entre 12 y 110 años', type: 'number' },
                            ]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="Correo Electrónico" name="email" rules={[{ type: 'email', required: true, message: 'Debe ingresar un email válido' }]}>
                            <Input type='email' maxLength={35} minLength={8} />
                        </Form.Item>
                        <Form.Item label="Contraseña" name="password" rules={[{ required: true, message: 'Por favor ingrese una contraseña' }]}>
                            <Input type='password' maxLength={20} minLength={8} />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Registrarse
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </>
    )
}
