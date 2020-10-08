import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Title } from './styles';

interface IHeaderProps {
    openModal: () => void;
    icon: React.ComponentType<IconBaseProps>;
    title: string;
    iconButton: React.ComponentType<IconBaseProps>;
    titleButton: string;
}

const HeaderModules: React.FC<IHeaderProps> = ({
    openModal,
    icon: Icon,
    title,
    titleButton,
    iconButton: IconButton,
}) => {
    return (
        <Container>
            <Title>
                <Icon size={25} color="rgba(0,0,0,0.7)" />
                <h1>{title}</h1>
            </Title>
            <nav>
                <button
                    className="button-form"
                    type="button"
                    onClick={openModal}
                >
                    <div className="button-text">{titleButton}</div>
                    <div className="button-icon">
                        <IconButton size={24} />
                    </div>
                </button>
            </nav>
        </Container>
    );
};

export default HeaderModules;
