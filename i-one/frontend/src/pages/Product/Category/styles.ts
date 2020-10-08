import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 30px;
    border-radius: 8px;
    background: #fff;
`;

export const CategoriesContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;

    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
`;
