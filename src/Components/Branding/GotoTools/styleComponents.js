import styled from "styled-components";


export const GotoToolComponent = styled.div`
background: #0D0D0D 0% 0% no-repeat padding-box;
   .gotoTools_section{
    padding : 0px 140px 0px 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    .main_section{
        max-width: 1500px;
        width: 100%;
        padding: 130px 0px 130px 0px;
    }
    .toolbox{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #0554F2;
        position: relative;
        img{
            position: absolute;
            top: 20px;
            left: 20px;
        }
    }
    .gotoTools_heading{
        text-align: left;
        font: normal normal 600 50px/64px Rubik;
        letter-spacing: 0px;
        color: #FFFFFF;
       max-width: 450px;
      
    }
    .gotoTools_para{
        margin-top: 10px;
        text-align: left;
        font: normal normal 300 16px/24px Rubik;
        letter-spacing: 0px;
        color: #FFFFFF;
        margin-right: 3rem;
        max-width: 500px;
    }
    .read_more{
        text-align: left;
        font: normal normal medium 14px/17px Rubik;
        letter-spacing: 0.25px;
         color: #FFFFFF;
    }
   }
`;