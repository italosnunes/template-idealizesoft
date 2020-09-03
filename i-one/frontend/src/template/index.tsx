import React from 'react';

import Header from './Header';
import SideBar from './Sidebar';
import Footer from './Footer';

import { Container, Grid, Content, ContentFooter } from './styles';

interface Props {
    component: React.ComponentType;
    template?: boolean;
}

const Template: React.FC<Props> = ({
    component: Component,
    template = false,
}) => {
    return template ? (
        <Container>
            <Grid>
                <SideBar />
                <ContentFooter>
                    <Header />
                    <Content>
                        <Component />
                    </Content>
                    <Footer />
                </ContentFooter>
            </Grid>
        </Container>
    ) : (
        <Component />
    );
};

export default Template;
