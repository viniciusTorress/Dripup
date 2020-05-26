import styled from 'styled-components';


export const ConteinerAcessorios = styled.div`
    width: 100%;    
    background-color:#fff; 
    height:100%;
    nav{
       
        width: 100%;               
        display: flex;
        align-items: center;
        justify-content: center;

        

    }
    ul{
                
        width:100%;
        float:bottom;
        

    }
    li{
        float:left;
        list-style:none;
        width:20%;
        border:1px solid #000;        
        margin:10px;
        height:230px;
        background-color: #d3d3d3;
        box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
        
        
    }
    
    img{
        width:100%;
        height:150px;

        
    }
   p{
       font-size:11px;
   }
    
   button{
       color:#000;
       background-color:#39ff14;
       margin-left:5px;
       width:60px;
       height:20px;
       text-align:center;
       border:1px solid #39ff14;
       margin-top:15px;
       
       
       &: hover{
           
           opacity:0.5;
       }
   }

`;
export const DivAcessorios = styled.div`
    width: 80%;  
    position:relative;
    top:40px;
    left:15%;
`;
