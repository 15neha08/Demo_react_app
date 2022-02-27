import styled from 'styled-components';
export const TechnologiesContainer = styled.div`
    padding : 100px 140px 0px 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    .technologies_containeres{
        max-width: 1550px;
        margin-top: 100px;
       .technologies_name{
        text-align: left;
        font: normal normal 600 38px/27px Rubik;
        letter-spacing: 0px;
        color: #0554F2;
       } 
       @media only screen and (max-width: 460px) {
        margin-top: 0px;
        .technologies_name{
            font: normal normal 600 38px/47px Rubik;
            @media only screen and (max-width: 460px) {
                font: normal normal 600 25px/47px Rubik;
            }
        }
        }
        .social_icons{
            height: 50px;
            width: 50px;
            @media only screen and (max-width: 460px) {
                height: 20px;
                width: 20px;
            }  
        }
        .social_link{
            text-align: left;
            font: normal normal 300 40px/58px Rubik;
            letter-spacing: 0px;
            color: #404040;
            @media only screen and (max-width: 460px) {
                font: normal normal 300 15px/38px Rubik;
            }
        }
    }
`;