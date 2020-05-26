import styled from 'styled-components';


export const ConteinerCompra = styled.div`
    width: 100%;    
    background-color:#fff;
    
`;

export const DivPergunta = styled.div`
    width:30%;
    height:70px;
    position:absolute;
    top:10%;
    left:35%;
    background-color:#d3d3d3;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    h3{
        position:absolute;
        left:15%;
    }
    div{
        display:flex;
        justify-content:space-between;
        margin-top:30px;
        padding:10px;
    }
    button{
        width:60px;
        height:25px;
        color:#000;
        background-color:#d3d3d3;
        border:1px solid #000;
        &: hover{
            color:#fff;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        }
    }
    
    
`;

