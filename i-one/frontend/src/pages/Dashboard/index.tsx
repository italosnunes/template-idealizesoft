import React from 'react';
import { FiFilePlus } from 'react-icons/fi';

import ControlTab from '../../components/Tabs';
import { Container, Title } from './styles';

import ListPlan from '../ListPlan';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Title>
                <FiFilePlus size={25} color="rgba(0,0,0,0.7)" />
                <h1>Arquivo importado</h1>
            </Title>
            <ControlTab
                tabs={[
                    {
                        index: 0,
                        label: 'Planificador',
                        component: ListPlan,
                    },
                ]}
            />
        </Container>
    );
};

export default Dashboard;
