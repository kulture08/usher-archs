import React from 'react';
import styled from 'styled-components';

const WrapperHard = styled.section`
    padding:5%;
    background:linear-gradient(to bottom, #0000006f, #0000006f),url("./images/junzi break.PNG");
    background-size:cover;
    text-align:center;
    margin-top: 5%;

    @media(min-width:768px){
        padding: 3% 10%;
        margin: 0 0 10% 0;
    }
    @media(min-width:992px){
        padding: 3% 20% 15%;
    }
     @media(min-width:1200px){
        margin: 0 0 0% 0;
    }
    h5{
        font-size:30px;
        color:#ffffff;
        @media(min-width:768px){
            font-size:48px;
            
        
        }
        br{
            display:none;
            @media(min-width:768px){
                display:block;
            }
        }
    }
    
`

function Hardware() {
    return (
        <WrapperHard>
            <h5>POS Hardware and accessories for <br />any business</h5>
        </WrapperHard>
    )
}

export default Hardware
