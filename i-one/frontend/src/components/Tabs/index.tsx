import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './styles.css';

interface TabInterface {
    label: string;
    index: number;
    component: React.ComponentType;
}

interface TabsProps {
    tabs: TabInterface[];
}

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function ControlTab(tabsName: TabsProps) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const { tabs } = tabsName;

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const tabColors = {
        backgroundColor: '#fff',
    };

    return (
        <div>
            <AppBar
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    marginTop: 20,
                    marginBottom: 30,
                }}
                position="static"
            >
                <Tabs
                    style={{
                        backgroundColor: '#fff',
                        border: 'none',
                        color: '#222',
                        boxShadow: 'none',
                    }}
                    value={value}
                    onChange={handleChange}
                >
                    {tabs.map(tab => (
                        <Tab
                            style={tabColors}
                            label={tab.label}
                            {...a11yProps(tab.index)}
                        />
                    ))}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {tabs.map(tab => (
                    <TabPanel
                        value={value}
                        index={tab.index}
                        dir={theme.direction}
                    >
                        <>
                            <tab.component />
                        </>
                    </TabPanel>
                ))}
            </SwipeableViews>
        </div>
    );
}
