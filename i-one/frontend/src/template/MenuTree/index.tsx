/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { LiHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiChevronDown } from 'react-icons/fi';

import { Container } from './styles';

interface Props {
    label: string;
    icon?: React.ComponentType<IconBaseProps>;
    liprops?: LiHTMLAttributes<HTMLLIElement>;
}

const MenuTree: React.FC<Props> = ({ label, icon: Icon, children }) => (
    <Container>
        <li>
            <a href="">
                <div>
                    {Icon && <Icon size={20} color="#fff" />}
                    <small>{label}</small>
                </div>

                <FiChevronDown size={20} color="#fff" />
            </a>

            <div className="submenu">
                <ul>{children}</ul>
            </div>
        </li>
    </Container>
);

export default MenuTree;
