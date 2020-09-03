import React from 'react';
import { FiUsers } from 'react-icons/fi';

import ControlTab from '../../components/Tabs';

import { Container, Title } from './styles';

import NewUser from './NewUser';
import ListUser from './ListUser';

const User: React.FC = () => {
    return (
        <Container>
            <Title>
                <FiUsers size={25} color="rgba(0,0,0,0.7)" />
                <h1>Usuários</h1>
            </Title>
            <ControlTab
                tabs={[
                    {
                        index: 0,
                        label: 'Listar Usuários',
                        component: ListUser,
                    },
                    { index: 1, label: 'Novo Usuário', component: NewUser },
                ]}
            />
        </Container>
    );
};

export default User;
