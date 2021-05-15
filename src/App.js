import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./configureStore";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import history from "./history";
// Components
// Pages
import BuilderList from './containers/App/builder-project/index';
const App = () => {

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>                           
                                <Router history={history}>
                                            <Switch>
                                                <Route
                                                    exact
                                                    path="/"              
                                                    component={BuilderList}
                                                />                               
                                            </Switch>
                                </Router>             
            </ThemeProvider>
        </Provider>
    )
}

export default App;
