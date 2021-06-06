import React, {Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import EntryScreen from "./EntryScreen";
import EnterGameScreen from "./EnterGameScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";

const Routes = () => {
    const location = useLocation();

    return (
        <Suspense
            fallback={
                <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
                    <div className="w-50 mx-auto">
                        Please wait while we load your pages
                    </div>
                </div>
            }>
            <Switch>
                <Redirect exact from="/" to="/EntryScreen" />
                <Route
                    path={[
                        '/EntryScreen',
                        '/EnterGameScreen',
                        '/GameScreen',
                        '/GameOver'
                    ]}>
                    <Switch location={location} key={location.pathname}>
                        <Route path="/EntryScreen" component={EntryScreen}/>
                        <Route path="/EnterGameScreen" component={EnterGameScreen}/>
                        <Route path="/GameScreen" component={GameScreen}/>
                        <Route path="/GameOver" component={GameOverScreen}/>
                    </Switch>
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;