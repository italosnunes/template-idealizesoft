import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useToast } from '../../../hooks/toast';
import api from '../../../services/api';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Container, MenuButton } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';

interface FormData {
    name: string;
    email: string;
    password: string;
}
const NewUser: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();

    /* const handleCancel = useCallback(() => {
        history.push('/user');
    }, [history]); */

    const handleSubmit = useCallback(
        async (data: FormData) => {
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    email: Yup.string()
                        .required('E-mail obrigatório')
                        .email('Digite um e-mail válido'),
                    name: Yup.string().required('Digite o nome'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await api.post('/users', {
                    ...data,
                    password: 'idealizesoft',
                });

                addToast({
                    type: 'success',
                    title: 'Cadastro realizado com sucesso',
                    description:
                        'No primeiro acesso, será solicitado criar uma senha',
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);

                    return;
                }

                addToast({
                    type: 'error',
                    title: 'Erro ao salvar usuário',
                    description: 'E-mail já cadastrado',
                });
            }
        },
        [addToast],
    );

    return (
        <Container>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Nome" />

                <Input name="email" type="text" placeholder="E-mail" />

                <MenuButton>
                    <Button type="submit">Salvar</Button>
                </MenuButton>
            </Form>
        </Container>
    );
};

export default NewUser;
