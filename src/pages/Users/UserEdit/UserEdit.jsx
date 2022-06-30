import { Button, Col, Form, Input, Row, Modal  } from 'antd';
import React, { useState } from 'react'
import { useEffect } from 'react';

export const UserEdit = ({ user }) => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(()=> {
        console.log(`formEffect`, user)
        form.setFieldsValue(user)
        console.log(form.getFieldsValue());
        showModal();
    }, [user])

    const handleSubmitFinish = () => {
        console.log( form.getFieldsValue())
    }

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setIsModalVisible(false);
      };

    return (
        // Antd user edit modal
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div>
                <h1>UserEdit</h1>
                {
                    Object.keys(user).map(value => <div key={value}>{value}:{user[value]}</div>)
                }
                <Row justify='center' className='p-lg'>
                    <Col span={16}>
                        <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={handleSubmitFinish}>
                            <Form.Item label='Correo Electrónico' name='fullName'>
                                <Input type='text' minLength={3} />
                            </Form.Item>
                            <Form.Item label='Contraseña' name='age'>
                                <Input type='number' />
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 8, offset: 16 }}>
                                <Button htmlType='submit' type='primary'>
                                    Ingresar
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

            </div>
      </Modal>
        
    )
}
