import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Index';
import {ConteinerCompra,DivPergunta,BtnCancelar } from './style.js';
import FormCadastro from '../../Components/FormCadastro';
import Footer from '../../Components/footer';





function Comprar () {
  const [cadastrar, setCadastrar] = useState(false);
  const [Comprar, setComprar] = useState(false);
    return(
        <>
          <Header/>
          <ConteinerCompra>
            <DivPergunta>
              <h3>Ja é cadastrado em nossa loja</h3>
              <div>
                <button disabled={cadastrar === true} onClick={ ()=> {setComprar(!Comprar)}}>Sim </button>
                <button disabled={Comprar === true} onClick={ ()=> {setCadastrar(!cadastrar)}} >Não  </button>
              </div>
            </DivPergunta>
            {Comprar && <FormCadastro cadastro="Sim"/>}
            {cadastrar && <FormCadastro cadastro="Não"/>}          
          </ConteinerCompra>
          <Footer/>
        </>
    );
}

export default Comprar;