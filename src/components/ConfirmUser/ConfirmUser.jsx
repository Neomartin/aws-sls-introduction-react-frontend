import { Button, Form, Input, InputNumber, notification } from 'antd'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js'
import React from 'react'
import { useAuth } from '../../services/Auth/AuthContext';
import { useNavigate } from 'react-router-dom'

const POOL_DATA = {
    ClientId: '1jfmni2vt21hhpdq509d9o74on',
    UserPoolId: 'us-east-1_CekI6ywcl'
};
const userPool = new CognitoUserPool(POOL_DATA);

export const ConfirmUser = () => {
    const navigate = useNavigate()
    const confirmUser = ({ code, user }) => {
        console.log(code, user)
        const userData = {
            Username: user,
            Pool: userPool
        };
        const cognitUser = new CognitoUser(userData);
        cognitUser.confirmRegistration(code, true, (err, result) => {
            if (err) {
                console.log(err)
                return notification.error({
                    message: 'Error al confirmar usuario',
                    description: 'No se pudo validar el código de confirmación',
                });
            }
            console.log(result);
            notification.success({
                message: 'Usuario confirmado!',
                description: 'Ahora puede loguearse con su usuario y contraseña',
                duration: 2
            });
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        });
    }

    function resendCode() {
        const user = document.getElementById('confirmUser_user').value;

        const cognitUser = new CognitoUser({Username: user, Pool: userPool});
        cognitUser.resendConfirmationCode((err, result) => {
            if(err) return notification.error({
                message: 'Error',
                description: 'No se pudo enviar el código de confirmación',
            });
            notification.success({
                message: 'Código reenviado!',
                description: 'El código de confirmación fue enviado nuevamente a su correo',
                duration: 2
            });
        });
    }
    return (
        <div>
            <Form name='confirmUser' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={confirmUser}>
                <Form.Item name='user' label='Usuario' rules={[{ required: true, message: 'Ingrese un usuario válido' }]}>
                    <Input minLength={3} maxLength={254} />
                </Form.Item>
                <Form.Item name='code' label='Código' rules={[{ required: true, message: 'Ingrese el código recibido en su email' }]}>
                    <Input minLength={6} maxLength={6} style={{ 'width': 100 }} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Confirmar
                    </Button>
                </Form.Item>
            </Form>
            <a onClick={resendCode}>Reenviar código</a>
        </div>
    )
}
