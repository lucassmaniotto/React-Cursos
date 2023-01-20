import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from 'common/context/User';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <UserProvider>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/feira">
                        <Feira />
                    </Route>
                </UserProvider>
                <Route path="/carrinho">
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}