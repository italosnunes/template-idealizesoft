import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

import Template from './template';

const App: React.FC = () => (
    <Router>
        <AppProvider>
            <Routes />
            <Template />
        </AppProvider>

        <GlobalStyle />
    </Router>
);

export default App;
