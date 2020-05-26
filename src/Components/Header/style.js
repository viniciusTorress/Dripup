import styled from 'styled-components';

export const DivHeader = styled.header`
    
      background-color: #d3d3d3;
      width: 100%;
      max-height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      z-index: 3;
      box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);

      h1 {
        margin-left: 0.5em;
        color: #fff;
        border-left: 0.1em solid #fff;
        padding: 0.3em 0.7em;
        font-size: 1.7em;       
        fonte-family: Arial; 
        
      }
      
        

        input {
          width: 80%;
          height: 1.5em;
          max-width: 30em;
          color: #333;
          border: 1px solid #dcdce6;
          border-radius: 5px;
          padding: 0 18px;
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        }

        div {
          display: flex;
          align-items: center;
        }
        nav{
          position: absolute; left: 60%;
          width: 30%;
          height: 20px;
          top: -17px
          
      }
        li{
          width:30%
          list-style: none;
          float: left;
          padding: 10px;
          margin: 25px 5px;
          
         
          
      }
      a{
        text-decoration: none;
        color: #000000;
        fonte-family: Arial;
        &: hover{
          
            
            color:#fff;
        }
        button {
          background-color: #d3d3d3;
          border: 0;
          border-radius:8px;
          transition: filter 0.2s;
          position:absolute;
          right:20px;
          top:5px;
          &:hover {
            filter: brightness(93%);
            
          }
        }
       

    }
`;

export const Imagemlogo = styled.img`
  width: 10%;
  height: 40px;
  margin-left: 1.3em;
  margin-top: 0.25em;
  transition: filter 0.2s;
  border-radius:50%;
  &:hover {
    filter: brightness(90%);
  }
`;






