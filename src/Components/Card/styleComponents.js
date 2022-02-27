import styled from 'styled-components';

export const FeatureCardDetails = styled.div`
  
 margin : ${(props) => props.padding && props.padding};
 .feature-card{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 11px 35px #0000001A;
    border-radius: 4px;
    position: relative;
    /* min-height: 325px; */


    .card_img_box{
        position: relative;     
    }
    .pin_icon{
        position: absolute;
        right: 10px;
        top: 10px;
        height: 30px;
        width: 30px;
    }

    .feature-title{
        color: #404040;
        letter-spacing: 0.29px;
        text-align: left;
        font: normal normal 500 16px/24px Rubik;
        opacity: 1;
        min-height: 48px;
    }
    .brand-title{
        color: #FFFFFF;
        letter-spacing: 0.29px;
        text-align: left;
        font: normal normal 500 14px/24px Rubik;
        opacity: 1;
        min-height: 48px;
    }
    .feature-type{
        color:  #8C8C8C;
        font: normal normal 300 16px/24px Rubik;
        letter-spacing: 0px;
        bottom: 0px;
    }
    .brand-type{
        color:  #FFFFFF;
        font: normal normal 300 14px/24px Rubik;
        letter-spacing: 0px;
        bottom: 0px; 
    }
 }
 .path-card{
    min-height: 50vh;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 11px 35px #0000000D;
    border-radius: 4px;
    position: relative; 
    z-index: 99;
    [data-aos] {
     pointer-events: none;
     
     &.aos-animate {
     pointer-events: auto;
     }
    }
    /* width: 22rem; */
    .path-title{
        color: #404040;
        letter-spacing: 0px;
        font: normal normal 500 25px/24px Rubik;  
       
    }
    .path-type{
        color:  #4F5059;
        font: normal normal 300 16px/24px Rubik;
        letter-spacing: 0px;
        margin-top : 15px ;
    }
    .control{
        font: normal normal 700 18px/27px Rubik;
        letter-spacing: 0.32px;
        color: #404040;
        margin-top: 15px;
    }
 }
 
`;