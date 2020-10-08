import React from 'react';
import {
    FiHome,
    FiLayers,
    FiUsers,
    FiUpload,
    FiLinkedin,
    FiWatch,
    FiHeadphones,
} from 'react-icons/fi';
import MenuItem from '../MenuItem';
import MenuTree from '../MenuTree';
import logo from '../../assets/logo-branco.png';
import { Container } from './styles';

const Menu: React.FC = () => {
    return (
        <Container>
            <img src={logo} alt="logo" />
            <ul>
                <MenuItem
                    path="/"
                    label="Dashboard"
                    icon={FiHome}
                    iconSize={20}
                />
                <MenuTree label="Cadastro" icon={FiLayers}>
                    <MenuItem
                        path="/admin/user"
                        label="Usuários"
                        icon={FiUsers}
                        iconSize={15}
                    />
                    <MenuTree label="Produto" icon={FiLayers}>
                        <MenuItem
                            path="/admin/product"
                            label="Produto"
                            icon={FiWatch}
                            iconSize={15}
                        />
                        <MenuItem
                            path="/admin/product-category"
                            label="Categoria"
                            icon={FiHeadphones}
                            iconSize={15}
                        />
                        <MenuItem
                            path="/admin/manufacturer"
                            label="Marca"
                            icon={FiLinkedin}
                            iconSize={15}
                        />
                    </MenuTree>
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
};

export default Menu;
