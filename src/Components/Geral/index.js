import React from 'react';
import travis from '../../img/travis.png';
import tiago from '../../img/tiago.png';
import Rei from '../../img/O_rei.png';
import tiringa from '../../img/tiringa.png';
import { Parceiro,ImgParceiro, Desc, DivP } from './style';


function Geral (props) {
    if(props.nome ==="Trevis Scott"){
        var nome = <Parceiro>{props.nome}</Parceiro>
        var imagem = <ImgParceiro src={travis}/>
        var texto = <Desc>O cantor de trap vem fechando com nossa marca representando nos la fora, e sendo nosso maior icone de markting </Desc>
    }else if(props.nome === "Tiago Lemos"){
        var nome = <Parceiro>{props.nome}</Parceiro>
        var imagem = <ImgParceiro src={tiago}/>
        var texto = <Desc>O maior skatista do nosso cabrando tudo no capeonados e nos representando muito bem brasil a fora </Desc>
    }else if(props.nome === "Roberto carlos"){
        var nome = <Parceiro>{props.nome}</Parceiro>
        var imagem = <ImgParceiro src={Rei}/>
        var texto = <Desc>Nosso amado rei Roberto carlos vem sendo nosso representante nacional, com nosso contrato dizendo que podemos descongelar ele a cada lançamento de roupa, não apenas final de ano pra cantar na globo.<br/> #chupaglobo </Desc>
    }
    else{
        var nome = <Parceiro>{props.nome}</Parceiro>
        var imagem = <ImgParceiro src={tiringa}/>
        var texto = <Desc>Tiringa vem sendo nosso digital influencer, nos representando nas redes sociais, sendo o pião mais estiloso  todos  </Desc>
    }
    return(
        <>
            {nome}
            <DivP>
                
                {imagem}
                {texto}
            </DivP>
            
            <hr/>
            
        </>
    );
}

export default Geral;