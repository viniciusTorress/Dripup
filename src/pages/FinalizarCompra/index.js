import React from 'react';
import Header from '../../Components/Header/Index';
import Footer from '../../Components/footer';
import { Formulario,BtnCancelar,ConteinerFinalizar } from './style.js';





function Finalizar () {
    return(
        <>
        <Header/>
        <ConteinerFinalizar>
            <Formulario>
                <fieldset>
                <legend>Formade Pagamento</legend>
                <input type="radio" name="rPagamento" required=""/> Cartão de débito
                <input type="radio" name="rPagamento" required=""/>  Cartão de Crédito 
                <input type="radio" name="rPagamento" required=""/> Boleto 
                </fieldset>
                <fieldset>
                <legend>Dados do cartão</legend>
                <p>Numero do cartão: <input type="text" name="tNome" placeholder="" required=""e required size="15"/></p>
                <p>Nome do titular: <input type="text" name="tNome" placeholder="como esta no cartão" required=""e required size="25"/></p>
                <p>Data de Vencimento: <input type="date" name="dData" required=""/></p>
                <p>Codigo do Cartão: <input type="text" name="tNome" placeholder="" required=""e required size="5"/></p>
                <br/>
                <div>
                    <BtnCancelar>Cancelar</BtnCancelar>
                    <BtnCancelar type="submit" name="sProximo">Finalizar</BtnCancelar>            
                </div>
                </fieldset>
            </Formulario>
        </ConteinerFinalizar>
        
        <Footer/>
        </>
    );
}

export default Finalizar;