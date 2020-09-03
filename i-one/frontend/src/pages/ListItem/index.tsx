import React from 'react';

import { Container, Header, Footer, Lista, ListaItem } from './styles';

interface Order {
    razaoSocial: string;
    codPDV: number;
}
interface Items {
    id: string;
    title: string;
}
interface OrderItems {
    order: Order;
    items?: Array<Items>;
}
const ListItem = ({
    razaoSocial,
    codPDV,
    fantasia,
    vendedor,
    dia,
    municipio,
    items,
}) => {
    return (
        <Container>
            <Header>
                <div>
                    <strong>{razaoSocial}</strong>

                    <span>
                        COD PDV:
                        {codPDV}
                    </span>
                </div>
            </Header>
            <p>
                {fantasia}
-{municipio}
-{vendedor}
-{dia}
                <br />
            </p>
            <Footer>
                <legend>
                    <p>Itens não vendidos</p>
                </legend>

                <Lista>
                    {items.map(item => (
                        <ListaItem key={item.id} onClick={() => {}}>
                            <span>{item.title}</span>
                        </ListaItem>
                    ))}
                </Lista>
            </Footer>
        </Container>
    );
};

export default ListItem;
