/* eslint-disable react/jsx-indent */
import React, { useState, useRef, useCallback } from 'react';
import { FiLock } from 'react-icons/fi';
import {
    useHistory,
    useLocation,
    RouteComponentProps,
    RouteProps,
} from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer } from './styles';

interface SignInFormData {
    passwordOld: string;
    password: string;
    passwordConfirm: string;
}

type UserParams = {
    email: string;
};

const AlterPassword: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();
    const location = useLocation<UserParams>();

    const { alterPassword } = useAuth();

    const { addToast } = useToast();

    const { email } = location.state;

    const handleSaler = () => {
        history.push('/signin-user');
    };

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    passwordOld: Yup.string().required(
                        'Digite sua senha atual',
                    ),
                    password: Yup.string().required('Digite a nova senha'),
                    passwordConfirm: Yup.string().required(
                        'Confirme a nova senha',
                    ),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await alterPassword({
                    email,
                    passwordOld: data.passwordOld,
                    password: data.password,
                    passwordConfirm: data.passwordConfirm,
                });
                console.log('chegou no push');
                history.push('/');
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);

                    return;
                }

                addToast({
                    type: 'error',
                    title: 'Erro na autenticação ',
                    description: 'Usuário e/ou Senha inválido(s)',
                });
            }
        },
        [alterPassword, addToast, history],
    );

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Alterar Senha</h1>
                        <h1>{email}</h1>

                        <Input
                            name="passwordOld"
                            type="password"
                            icon={FiLock}
                            placeholder="Senha atual"
                        />

                        <Input
                            name="password"
                            type="password"
                            icon={FiLock}
                            placeholder="Nova Senha"
                        />

                        <Input
                            name="passwordConfirm"
                            type="password"
                            icon={FiLock}
                            placeholder="Repetir Senha"
                        />

                        <Button type="submit">Alterar Senha</Button>
                    </Form>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default AlterPassword;
