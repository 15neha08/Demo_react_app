import styled from "styled-components";

export const UiuxPostSection = styled.div`
    padding : 100px 140px 0px 170px;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2 0% 0% no-repeat padding-box;
    @media only screen and (max-width: 460px) {
        padding : 100px 20px 0px 20px;
      }
    .uiux_section{
        max-width: 1500px;
    }
    .uxui_heading{
        font: normal normal 600 50px/64px Rubik;
        letter-spacing: 0px;
        color: #0D0D0D;
        text-align: center;
    }
    .uxui_sub_heading{
        font: normal normal 600 18px/27px Rubik;
        letter-spacing: 0px;
        color: #8C8C8C;
        text-align: center;
        padding-top: 10px;
    }

`;