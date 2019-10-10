import styled from 'styled-components';

export const PauseVideoContainer = styled.div `
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: black;
    z-index:3;
`

export const divPause = styled.div`
    position: absolute;
    top: 50%;
    height: 100px;
    width: 280px;
    border-radius: 15px;
    background-color: rgba(246, 246, 246, 0.8);
    display: flex;
    right:0;
    left: 0;
    z-index: 3;
    

`;

export const divIcon = styled.div`
    
    display: flex;
    left: 2%;
    height: 100%;
    width: 26%;
    align-items: center;
    justify-content: center;
   
   i{
    font-size: 20px;
    color:  #000000c9;
   }
`;

export const divText = styled.div`

    display: inline-block;
    right: 2%;
    height: 100%;
    width: 70%;
    align-items: center;
    box-sizing: border-box;
    
    h1{
        margin-bottom: 0;
        color: rgba(0, 0, 0,0.63);
        font-family: Helvetica, Arial, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0px;
        text-align: center;
        text-decoration: none;
        vertical-align: top;
        line-height: 1.3;
        width: 160px;
        height: 41px;
        padding-top: 10px;
        min-width: 1px;
        min-height: 1px;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        box-sizing: border-box;
    }

    p{
        color: rgba(102, 102, 102, .6);
        font-family: Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0px;
        text-align: center;
        text-decoration: none;
        vertical-align: top;
        line-height: 1.3;
        width: 160px;
    }
`;