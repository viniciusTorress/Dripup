import styled from 'styled-components';


export const Mainhome = styled.div`
    width: 100%;    
    background-color:#fff;  
     
    div{
         width:50%;
         height:400px;
         display:flex;
         align-items:center;
         justify-content: center;
         position:relative;
         left:25%;
         top:35px;
    }
    h1{
        color: #000;
        fonte-family: Arial;
        fonte-size: 50px; 
        position:absolute;
        top:95%;
        
                     
        
    }

`;
export const Imagemlogo = styled.img`
    width:100%;
    height:350px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    
    
`;

export const DivParceiros = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content: center;
    position:absolute
    top:5%;
    left:25%;

    h2{
        color: #000;
        fonte-family: Arial;
        fonte-size: 35px; 
        position:absolute;
        left:40%;
        top:10%; 
    }
    
    nav{ 
        width:100%;
        height:40px;
        display:flex;
        align-items:center;
        justify-content: center;
        background-color:#d3d3d3;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        position:absolute;        
        top:20%;
        
        
        
        
    }
    li{
        list-style: none;
        float: left;
        padding: 10px;
        margin: 25px 5px;
        
    }

    button{
        fonte-family: Arial;
        color:#000;
        background-color:#d3d3d3;
        border: 1px solid #d3d3d3;
        width:100px;
        height:35px;
        &: hover{
            color:#fff;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

        }
    }
    button[disabled]{
        opacity:1;
        color: #fff;

    }
    
`;


    