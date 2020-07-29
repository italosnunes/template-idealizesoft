import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Container } from './styles';

const ListUser = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <tr>
                        <td>italo</td>
                        <td>italo@italo</td>
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
                    <tr>
                        <td>samile</td>
                        <td>samile@samile</td>
                        <td>
                            <FiMenu size={20} color="#333" />
                        </td>
                    </tr>
                    <tr>
                        <td>kate e cacau</td>
                        <td>cachorros@pqp.com</td>
                        <td>
                            <FiMenu size={20} color="#333" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
};

export default ListUser;
