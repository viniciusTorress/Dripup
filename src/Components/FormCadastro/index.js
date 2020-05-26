import React from 'react';
import { Formulario,BtnCancelar } from './style.js';
import { Link } from 'react-router-dom';



function FormCadastro(props) {
    if(props.cadastro === "Sim"){
        var formulario = <Formulario>
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
    }else if (props.cadastro === "Não"){
        var formulario = <Formulario>
                            <fieldset>
                                <legend>Cadastro</legend>
                                <p>Nome: <input type="text" name="tNome" placeholder="Nome sem abreviação" required=""e required size="40"/></p>
                                <p>Email: <input type="email" name="tNome" placeholder="email" required=""e required size="40"/></p>
                                <p>CPF: <input type="text" name="tNome" placeholder="Apenas numeros" required=""e required size="10"/></p>
                                <p>CEP: <input type="text" name="tNome" placeholder="Apenas numeros" required=""e required size="10"/></p>
                                <p>Bairro: <input type="text" name="tNome" placeholder="" required=""e required size="30"/></p>
                                <p>N°: <input type="text" name="tNome" placeholder="" required=""e required size="8"/></p>
                                <p>complemento: <input type="text" name="tNome" placeholder="" required=""e required size="30"/></p>
                                <p>Tefone: <input type="text" name="tNome" placeholder="Adicione o DDD" required=""e required size="20"/></p>
                                <p>celular: <input type="text" name="tNome" placeholder="Adicione o DDD" required=""e required size="20"/></p>
                                <br/>
                                <br/>
                                <div>
                                <BtnCancelar>Cancelar</BtnCancelar>
                                <Link to="/FinalizarCompra">
                                    <BtnCancelar type="submit" name="sProximo">proximo</BtnCancelar>
                                </Link>
                            </div>
                            </fieldset>
                        </Formulario>
    }
  return (
      <>
        {formulario}
     </>
  );
}

export default FormCadastro;