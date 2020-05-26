import React from 'react';
import { Link} from 'react-router-dom';
import {DivHeader,Imagemlogo } from './style.js';
import mao from '../../img/mao.jpeg';
import { AiOutlineShoppingCart } from "react-icons/ai"; 





function Header () {
    return(
        <>
            <DivHeader>
                <div>                    
                   <Imagemlogo src={mao} alt="logo" id = "imgLogo"/>
                   <Link to="/">               
                    <h1>DripUp</h1>
                    </Link>
                    <input placeholder="Pesquisa"/>
                </div>
                
                <nav>
                    <li>
                        <Link to="/Vestuario">Vestuario</Link>
                    </li>
                    <li>
                        <Link to="/Acessorios">Acessorios</Link>
                    </li>                   
                </nav>
                <Link to="/Comprar">
                <button type="button">
                    <AiOutlineShoppingCart size={35} color="#000"/>
                </button>
                </Link>
                
            </DivHeader>
      
        </>
    );
}

export default Header;