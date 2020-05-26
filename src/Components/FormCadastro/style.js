import styled from 'styled-components';

export const Formulario = styled.div` 
    width:35%;
    margin-top:15%;
    margin-left:33%;        
    padding:20px;
    height:80%;
    background-color:#d3d3d3;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    float:left;

    legend{
        font-size:35px;
        text-align:center;
        
    }
    fildset{
        margin-top:20px;
    }
    P{
        margin-top:10px;
        margin-left:3%;
    }
    input{
        margin-top:10px;
        margin-left:5px;
        
    }
    div{
        display:flex;
        justify-content:space-between;
        margin-bottom:10px;
        padding:10px;
    }
`;
export const BtnCancelar = styled.button`
    width:60px;
    height:25px;
    color:#000;
    background-color:#d3d3d3;
    border:1px solid #000;
    &: hover{
        color:#fff;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    }
        
`;