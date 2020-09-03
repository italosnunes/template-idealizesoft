import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container } from './styles';

interface Order {
    codPDV: number;
    razaoSocial: string;
    fantasia: string;
    municipio: string;
    vendedor: string;
    segunda: string;
    terca: string;
    quarta: string;
    quinta: string;
    sexta: string;
    sabado: string;
    domingo: string;
    dia: string;
    cerveja: string;
    rgb: string;
    litro: string;
    litrinho: string;
    inteira: string;
    he: string;
    puroMalte: string;
    nab: string;
    redbull: string;
    bdm: string;
    ml350: string;
    ml600: string;
    planoTotal: number;
    skPm: string;
    bohPm: string;
    he2: string;
    value: string;
    premium: number;
    corePm: number;
    plano: number;
    skPm2: number;
}
const ListPlan: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        async function loadPlan() {
            const response = await api.get('/orders');

            setOrders(response.data);
        }

        loadPlan();
    });

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <td>Cod PDV</td>
                        <td>Razão Social</td>
                        <td>Nome Fantasia</td>
                        <td>Municipio</td>
                        <td>Vendedor</td>
                        <td>Segunda</td>
                        <td>Terça</td>
                        <td>Quarta</td>
                        <td>Quinta</td>
                        <td>Sexta</td>
                        <td>Sábado</td>
                        <td>Domingo</td>
                        <td>Dia</td>
                        <td>Cerveja</td>
                        <td>Rgb</td>
                        <td>Litro</td>
                        <td>Litrinho</td>
                        <td>Inteira</td>
                        <td>He</td>
                        <td>Puro Malte</td>
                        <td>Nab</td>
                        <td>RedBull</td>
                        <td>Bdm</td>
                        <td>350</td>
                        <td>600</td>
                        <td>Plano Total</td>
                        <td>SK PM</td>
                        <td>Boh PM</td>
                        <td>He</td>
                        <td>Value</td>
                        <td>Premium</td>
                        <td>Core PM</td>
                        <td>Plano</td>
                        <td>SK PM</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr>
                            <td>{order.codPDV}</td>
                            <td>{order.razaoSocial}</td>
                            <td>{order.fantasia}</td>
                            <td>{order.municipio}</td>
                            <td>{order.vendedor}</td>
                            <td>{order.segunda}</td>
                            <td>{order.terca}</td>
                            <td>{order.quarta}</td>
                            <td>{order.quinta}</td>
                            <td>{order.sexta}</td>
                            <td>{order.sabado}</td>
                            <td>{order.domingo}</td>
                            <td>{order.dia}</td>
                            <td>{order.cerveja}</td>
                            <td>{order.rgb}</td>
                            <td>{order.litro}</td>
                            <td>{order.litrinho}</td>
                            <td>{order.inteira}</td>
                            <td>{order.he}</td>
                            <td>{order.puroMalte}</td>
                            <td>{order.nab}</td>
                            <td>{order.redbull}</td>
                            <td>{order.bdm}</td>
                            <td>{order.ml350}</td>
                            <td>{order.ml600}</td>
                            <td>{order.planoTotal}</td>
                            <td>{order.skPm}</td>
                            <td>{order.bohPm}</td>
                            <td>{order.he2}</td>
                            <td>{order.value}</td>
                            <td>{order.premium}</td>
                            <td>{order.corePm}</td>
                            <td>{order.plano}</td>
                            <td>{order.skPm2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default ListPlan;
