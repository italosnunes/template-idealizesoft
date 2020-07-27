import React from 'react';
import { FiMail } from 'react-icons/fi';
import MenuItem from '../MenuItem';
import MenuTree from '../MenuTree';

import { Container } from './styles';

const Menu: React.FC = () => (
    <Container>
        <h1>Menu</h1>
        <ul>
            <MenuItem path="#" label="Dashboard" icon={FiMail} />
            <MenuTree label="Cadastro" icon={FiMail}>
                <MenuItem path="#" label="Clientes" icon={FiMail} />
                <MenuItem path="#" label="Produtos" icon={FiMail} />
            </MenuTree>
        </ul>
    </Container>
);

export default Menu;
