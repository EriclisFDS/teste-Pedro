import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import LoginScreen from '../pages/loginScreen';
import Charts from './pages/charts';

export default function Routes(){
    return (
        <Switch>
            <Route element={<LoginScreen/>} path="/" />
            <Route element={<Charts/>} path="/charts" />
        </Switch>
    );
}