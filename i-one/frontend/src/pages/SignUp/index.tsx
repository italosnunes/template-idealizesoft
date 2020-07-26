import React, { useCallback, useRef } from 'react';
import {
    FiArrowLeft,
    FiMail,
    FiLock,
    FiUser,
    FiFileText,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(
        async (data: SignUpFormData) => {
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    name: Yup.string().required('Nome obrigatório'),
                    email: Yup.string()
                        .required('E-mail obrigatório')
                        .email('Digite um e-mail válido'),
                    password: Yup.string().min(6, 'No mínimo 6 dígitos'),
                    cpfcnpj: Yup.string().required('CPF/CNPJ obrigatório'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await api.post('/companies', data);
                history.push('/');

                addToast({
                    type: 'success',
                    title: 'Cadastro realizado com sucesso',
                    description: 'Você já pode fazer seu logon!',
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);

                    return;
                }

                addToast({
                    type: 'error',
                    title: 'Erro no cadastro',
                    description:
                        'Ocorreu um erro ao fazer o cadastro. Tente novamente',
                });
            }
        },
        [addToast, history],
    );

    return (
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    <img src={logo} alt="idealizesoft" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu cadastro</h1>

                        <Input
                            name="name"
                            type="text"
                            icon={FiUser}
                            placeholder="Nome"
                        />
                        <Input
                            name="cpfcnpj"
                            type="number"
                            icon={FiFileText}
                            placeholder="CPF/CNPJ"
                        />
                        <Input
                            name="email"
                            type="text"
                            icon={FiMail}
                            placeholder="E-mail"
                        />
                        <Input
                            name="password"
                            type="password"
                            icon={FiLock}
                            placeholder="Password"
                        />

                        <Button type="submit">Cadastrar</Button>
                    </Form>

                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para logon
                    </Link>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default SignUp;
