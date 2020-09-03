import React, { useState, useEffect, useCallback } from 'react';

import { Container, Content, Header, Menu } from './styles';

import api from '../../services/api';

import ListItem from '../ListItem';

interface Order {
    razaoSocial: string;
    codPDV: number;
    fantasia: string;
    vendedor: string;
    dia: string;
    municipio: string;
}

interface Items {
    id: string;
    title: string;
}

interface OrdersItem {
    order: Order;
    items: Array<Items>;
}
const DashboardUser: React.FC = () => {
    const [day, setDay] = useState('XXX');
    const [data, setData] = useState<OrdersItem[]>([]);
    const userName2 = localStorage.getItem('@Idealizesoft:user.name');
    function handleDay(daySelected: string): void {
        setDay(daySelected);
    }

    useEffect(() => {
        async function loadList(userName: string) {
            const response = await api.post('orders/by-saler', {
                userName,
            });

            setData(response.data);
        }

        loadList('JAIRO GOMES DUARTE ALVES');
    }, []);

    return (
        <Container>
            <Header>
                <div>
                    <h1>Visitas Programadas</h1>
                    <h3>Selecione o dia da visita para filtrar os clientes</h3>
                </div>
                <Menu>
                    <button type="button" onClick={() => handleDay('SEG')}>
                        SEGUNDA
                    </button>
                    <button type="button" onClick={() => handleDay('TER')}>
                        TERÇA
                    </button>
                    <button type="button" onClick={() => handleDay('QUA')}>
                        QUARTA
                    </button>
                    <button type="button" onClick={() => handleDay('QUI')}>
                        QUINTA
                    </button>
                    <button type="button" onClick={() => handleDay('SEX')}>
                        SEXTA
                    </button>
                    <button type="button" onClick={() => handleDay('SAB')}>
                        SABADO
                    </button>
                    <button type="button" onClick={() => handleDay('DOM')}>
                        DOMINGO
                    </button>
                    <button type="button" onClick={() => handleDay('SEM')}>
                        SEM VISITA
                    </button>
                </Menu>
            </Header>
            <Content>
                {data.map(item => (
                    <ListItem
                        razaoSocial={item.order.razaoSocial}
                        codPDV={item.order.codPDV}
                        fantasia={item.order.fantasia}
                        vendedor={item.order.vendedor}
                        dia={item.order.dia}
                        municipio={item.order.municipio}
                        items={item.items}
                    />
                ))}
            </Content>
        </Container>
    );
};

export default DashboardUser;
