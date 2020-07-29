import React, { useState } from 'react';
import { FiUsers } from 'react-icons/fi';

import { Container, Title, Menu, Content } from './styles';

import NewUser from './NewUser';
import ListUser from './ListUser';

const User: React.FC = () => {
    const [newUser, setNewUser] = useState(false);

    return (
        <Container>
            <Title>
                <FiUsers size={25} color="rgba(0,0,0,0.7)" />
                <h1>Usuários</h1>
                {newUser && <h3> - Novo Usuário</h3>}
                {!newUser && <h3> - Listagem dos Usuários</h3>}
            </Title>
            <Menu>
                <button type="button" onClick={() => setNewUser(false)}>
                    Listar Usuários
                </button>
                <button type="button" onClick={() => setNewUser(true)}>
                    Novo Usuário
                </button>
            </Menu>
            <Content>
                {newUser && <NewUser />}
                {!newUser && <ListUser />}
            </Content>
        </Container>
    );
};

export default User;
