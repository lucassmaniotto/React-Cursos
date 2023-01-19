import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Router() {

    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login 
                        name={name} 
                        setName={setName}
                        balance={balance}
                        setBalance={setBalance}
                    />
                </Route>
                <Route path="/feira">
                    <Feira 
                        name={name} 
                        setName={setName}
                        balance={balance}
                        setBalance={setBalance}
                    />
                </Route>
                <Route path="/carrinho">
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}