import styled from 'styled-components';


export const AgileSection = styled.div`
    padding : 100px 140px 0px 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    .agile_main_section{
        max-width: 1500px;
      
        .agile_heading {
            font: normal normal bold 54px/60px Rubik;
            color: #0D0D0D;
            letter-spacing: 0px;
            margin-top: 50px;
            @media only screen and (max-width: 460px) {
                font: normal normal bold 35px/40px Rubik;
            }
        }
        .agile_sub_heading{
            font: normal normal 600 30px/64px Rubik;
            letter-spacing: 0.54px;
            color: #8C8C8C;
            @media only screen and (max-width: 460px) {
                font: normal normal 600 30px/35px Rubik;
            }
        }
        .agile_para{
            font: normal normal 300 18px/27px Rubik;
            color: #404040;
            letter-spacing: 0px;
            max-width: 1000px;
            margin-bottom: 50px;
            @media only screen and (max-width: 460px) {
                font: normal normal 300 15px/24px Rubik;
                margin-bottom: 0px;
                padding: 30px 20px;
            }
        }
      
    }
    @media only screen and (max-width: 460px) {
        padding: 100px 20px 20px 20px;
    }
`;