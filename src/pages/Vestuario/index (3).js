import React from 'react';
import Header from '../../Components/Header/Index';
import Footer from '../../Components/footer';
import { ConteinerVestuario, DivBoot } from './style.js';
import { Link } from 'react-router-dom';
import travis from '../../img/travis.jpg';
import jordan from '../../img/jordan.jpg';
import lebron from '../../img/lebron.jpg';
import kyrie from '../../img/kyrie.jpg';
import yeezy from '../../img/yeezy.jpg';
import dior from '../../img/dior.jpg';
import airmag from '../../img/airmag.jpg';
import adidas from '../../img/adidas.jpg';




function Vestuario () {

       

        

         
    return(
        <>
            <Header/>


            <ConteinerVestuario> 
                <DivBoot>      
                    <nav>
                        <ul>
                            <li>
                                
                                <img src={travis} />
                                <h5>R$ 11.250,00</h5>
                                <p>Tênis Nike Sb Dunk Low Travis Scott</p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                                
                            </li>
                            <li>
                                
                                <img src={kyrie} />
                                <h5>R$ 10.200,00</h5>
                                <p>Tênis Bota Air Jordan 1 Chicago premium</p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                                
                            </li>
                            <li>
                                
                                <img src={jordan} />
                                <h5>R$ 10.200,00</h5>
                                <p>Tênis Bota Air Jordan 1 Chicago premium</p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                                
                            </li>
                            <li>
                                
                                <img src={lebron} />
                                <h5>R$ 500.00</h5>
                                <p>Tênis Nike LeBron Soldier XIII SFG </p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                                
                            </li>
                        
                       
                            <li>
                            
                                <img src={dior} />
                                <h5>R$ 10.200,00</h5>
                                <p>Dior x Jordan 1 High OG Grey</p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                            
                            </li>
                            <li>
                            
                                <img src={airmag} />
                                <h5>R$ 40.000,00</h5>
                                <p>Tênis Nike Air Mag Marty McFly </p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                            
                            </li>
                            <li>
                            
                                <img src={adidas} />
                                <h5>R$ 600.00</h5>
                                <p>Tênis Adidas Ultraboost DNA</p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                            
                            </li>
                            <li>
                                
                                <img src={travis} />
                                <h5>R$ 11.250,00</h5>
                                <p>Tênis Nike Sb Dunk Low Travis Scott</p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                                
                            </li>
                            <li>
                                
                                <img src={jordan} />
                                <h5>R$ 10.200,00</h5>
                                <p>Tênis Bota Air Jordan 1 Chicago premium</p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                                
                            </li>
                            <li>
                                
                                <img src={lebron} />
                                <h5>R$ 500.00</h5>
                                <p>Tênis Nike LeBron Soldier XIII SFG </p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                                
                            </li>
                            <li>
                                
                                <img src={yeezy} />
                                <h5>R$ 10.200,00</h5>
                                <p>Tênis Bota Air Jordan 1 Chicago premium</p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                                
                            </li>
                            <li>
                            
                                <img src={airmag} />
                                <h5>R$ 40.000,00</h5>
                                <p>Tênis Nike Air Mag Marty McFly </p>
                                <Link to="/Comprar"><button>Comprar</button></Link>
                            
                            </li>
                        </ul>
                    </nav>         
                
                </DivBoot>

            </ConteinerVestuario> 
            
            
        </>
        
    );
}


export default Vestuario;