import React from 'react';
import Header from '../../Components/Header/Index';
import Footer from '../../Components/footer';
import { ConteinerAcessorios, DivAcessorios } from './style.js';
import { Link } from 'react-router-dom';
import carteira from '../../img/carteira.jpg';
import cinto from '../../img/cinto.jpg';
import eyewear from '../../img/eyewear.jpg';
import hardy from '../../img/hardy.jpg';
import chapeu from '../../img/chapeu.jpg';
import colar from '../../img/colar.jpg';
import tom from '../../img/tom.jpg';
import corrente from '../../img/prada.jpg';




function Acessorios () {

       

        

         
    return(
        <>
            <Header/>
            <ConteinerAcessorios> 
                <DivAcessorios>      
                <nav>
                    <ul>
                        <li>
                            
                            <img src={carteira} />
                            <h5>R$ 2400.000,00</h5>
                            <p>Gucci Carteira Couro de Carneiro</p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                        <li>
                            
                            <img src={cinto} />
                            <h5>R$ 1.391,00</h5>
                            <p>Off-White Cinto Logo Industrial Feminino</p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                        <li>
                            
                                <img src={eyewear} />
                                <h5>R$ 23.550,00</h5>
                                <p>Gucci Eyewear Óculos com Tachas</p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                        <li>
                            
                            <img src={hardy} />
                            <h5>R$ 23.219,00.</h5>
                            <p>John Hardy Pulseira Modern Chain de Prata com Ouro 18K</p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                    
                        <li>
                            
                            <img src={chapeu} />
                            <h5>R$ 21.140,00</h5>
                            <p>Takahiromiyashita the Soloist Chapéu Nick Fouquet com Pluma</p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                        <li>
                            
                            <img src={colar} />
                            <h5>R$ 20.397,00</h5>
                            <p>Bottega Veneta Colar com Corrente Esculpida</p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                        <li>
                            
                            <img src={tom} />
                            <h5>R$ 20.128,00</h5>
                            <p>Tom Wood Anel Moeda e Seda </p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                        <li>
                            
                            <img src={corrente} />
                            <h5>R$ 5.400,00</h5>
                            <p>Prada Colar com Corrente</p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                        <li>
                            
                            <img src={carteira} />
                            <h5>R$ 2400.000,00</h5>
                            <p>Gucci Carteira Couro de Carneiro</p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                        <li>
                            
                            <img src={cinto} />
                            <h5>R$ 1.391,00</h5>
                            <p>Off-White Cinto Logo Industrial Feminino</p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                        <li>
                            
                            <img src={eyewear} />
                            <h5>R$ 23.550,00</h5>
                            <p>Gucci Eyewear Óculos com Tachas</p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                        <li>
                            
                            <img src={hardy} />
                            <h5>R$ 23.219,00.</h5>
                            <p>John Hardy Pulseira Modern Chain de Prata com Ouro 18K</p>
                            <Link to="/Comprar"><button>Comprar</button></Link>
                            
                        </li>
                    </ul>
                </nav>
                
                
                
                </DivAcessorios>

            </ConteinerAcessorios> 
            
             
            
            
            
        </>
        
    );
}


export default Acessorios;