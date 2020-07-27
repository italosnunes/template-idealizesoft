import React from 'react';

import Header from './Header';
import SideBar from './Sidebar';
import Footer from './Footer';

import { Container, Grid, Content, ContentFooter } from './styles';

const Template: React.FC = () => (
    <Container>
        <Header />
        <Grid>
            <SideBar />
            <ContentFooter>
                <Content>
                    <h1>Teste</h1>
                </Content>
                <Footer />
            </ContentFooter>
        </Grid>
    </Container>
);

export default Template;
