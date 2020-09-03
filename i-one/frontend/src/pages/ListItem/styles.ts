import styled from 'styled-components';

export const Container = styled.article`
    width: 100%;
    min-height: 426px;

    background: #fff;

    margin-bottom: 20px;

    display: flex;
    flex-direction: column;

    border: 1px solid #e6e6f0;
    box-sizing: border-box;
    border-radius: 8px;

    padding: 0 0;

    p {
        padding: 0 20px;
        color: #6a6180;
        font-size: 16px;
    }
`;

export const Header = styled.header`
    div {
        display: flex;
        flex-direction: column;

        padding: 20px;

        strong {
            font-size: 24px;
            margin-bottom: 5px;
            color: #32264d;
        }

        span {
            color: #6a6180;
            font-size: 16px;
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;
    background: #fafafc;
    margin-top: 32px;
    padding: 20px 20px;

    p {
        width: 100%;
        color: red;
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    list-style: none;
`;

export const ListaItem = styled.li`
    bacground: #f5f5f5;
    border: 2px solid #f5f5f5;
    height: 110px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    span {
        flex: 1;
        margin-top: 12px;

        display: flex;
        align-item: center;
        color: rgba(0, 0, 0, 0.8);
    }
`;
