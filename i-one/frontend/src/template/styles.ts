import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Grid = styled.section`
    display: flex;
    flex-direction: row;
    padding: 0 5px;
    flex: 1;
    min-height: 100vh;

    background: rgb(51, 0, 51);
    background: linear-gradient(
        0deg,
        rgba(51, 0, 51, 1) 20%,
        rgba(102, 0, 102, 1) 80%,
        rgba(102, 0, 102, 1) 100%
    );
`;

export const ContentFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const Content = styled.div`
    display: flex;
    background: #f2f2f2;
    padding: 40px;
    height: 100%;
`;
