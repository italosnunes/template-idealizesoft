import React from 'react';
import { FiHome, FiLayers, FiUsers, FiUpload } from 'react-icons/fi';
import MenuItem from '../MenuItem';
import MenuTree from '../MenuTree';
import logo from '../../assets/logo-branco.png';
import { Container } from './styles';

const Menu: React.FC = () => (
    <Container>
        <img src={logo} alt="logo" />
        <ul>
            <MenuItem path="/" label="Dashboard" icon={FiHome} iconSize={20} />
            <MenuTree label="Cadastro" icon={FiLayers}>
                <MenuItem
                    path="/user"
                    label="Usuários"
                    icon={FiUsers}
                    iconSize={15}
                />
            </MenuTree>
            <MenuItem
                path="/import-order"
                label="Importar Planilha"
                icon={FiUpload}
                iconSize={20}
            />
        </ul>
    </Container>
);

export default Menu;
