import React, { useState } from 'react';
import Header from '../../Components/Header/Index';
import {Mainhome,Imagemlogo,DivParceiros } from './style.js';
import logo from "../../img/logo.jpeg";
import Footer from '../../Components/footer';
import Geral from '../../Components/Geral';

function Home () {

    const [trevis, setTrevis] = useState(false);
    const [tiago, setTiago] = useState(false);
    const [rei, setRei] = useState(false);
    const [tiringa, setTiringa] = useState(false);

    return(
        <>
            <Header/>
            <Mainhome>
               <div>                    
                 <Imagemlogo src={logo} alt="logo" id = "imgLogo"/>
                 <h1>É o corre das notas 💸</h1>
               </div>
               
               <DivParceiros>
                    <h2>Parceiros:</h2>                    
                    <nav>
                        <ul>
                            <li>
                            <button disabled={tiago === true || rei === true || tiringa === true} onClick={ ()=> {setTrevis(!trevis)}}>Trevis scott</button>
                            </li>
                            <li>
                                <button disabled={trevis === true || rei === true || tiringa === true} onClick={ ()=> {setTiago(!tiago)}}>Tiago Lemos</button>
                            </li>
                            <li>
                                <button disabled={tiago === true || trevis === true || tiringa === true} onClick={ ()=> {setRei(!rei)}}>Roberto carlos</button>
                            </li>
                            <li>
                                <button disabled={tiago === true || rei === true || trevis === true} onClick={ ()=> {setTiringa(!tiringa)}}>Tiringa</button>
                            </li>
                        </ul>
                    </nav>  
                                     
               </DivParceiros>
               {trevis && <Geral nome="Trevis Scott"/>}
               {tiago && <Geral nome="Tiago Lemos"/>}
               {rei && <Geral nome="Roberto carlos"/>}
               {tiringa && <Geral nome="Tiringa"/>} 
               
            </Mainhome>
            <Footer/>
        
        </>
    );
}

export default Home;