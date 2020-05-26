import React from 'react';
import{ Switch,Route}from 'react-router-dom';
import Home from './pages/Home';
import Vestuario from './pages/Vestuario/index (3)';
import Acessorios from './pages/Acessorios';
import Comprar from './pages/Comprar/';
import Finalizar from './pages/FinalizarCompra';



function Routes(){
    return(
        
        <div>
            <main>
                <Switch>
                    <Route  exact path="/" component={Home}></Route>
                    <Route path="/Acessorios" component={Acessorios}></Route>
                    <Route path="/Vestuario" component={Vestuario}></Route>
                    <Route path="/Comprar" component={Comprar}></Route>
                    <Route path="/FinalizarCompra" component={Finalizar}></Route>
                    

                </Switch>
            </main>
        </div>
       

    );
 }


export default Routes;