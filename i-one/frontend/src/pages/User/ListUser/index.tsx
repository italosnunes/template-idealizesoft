import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Button, Menu, MenuItem } from '@material-ui/core';

import api from '../../../services/api';

import { Container } from './styles';

interface User {
    name: string;
    email: string;
}

const ListUser = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const [users, setUsers] = useState<User[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/users');

            setUsers(response.data);
        }

        loadUsers();
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>E-mail</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <div>
                                    <Button
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <FiMenu size={20} />
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            Editar
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            Redefinir Senha
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            Inativar
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default ListUser;
