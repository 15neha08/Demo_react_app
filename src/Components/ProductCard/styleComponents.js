import styled from 'styled-components';

export const ProductCardComponent = styled.div`
 width:  475px;
 min-height: 495px;
 background-color: ${props => props.cardColor && props.cardColor};
 background-repeat: no-repeat;
 box-shadow: 0px 11px 35px #0000000D;
 border-radius: 4px;
 padding: 30px 40px;
 @media only screen and (max-width: 460px) {
   padding: 30px 0px;
 }
 .card_title{
    font: normal normal 500 20px/30px Rubik;
    letter-spacing: 0.36px;
    color: #404040;
    text-align: center;
 }
 .card_description{
    font: normal normal 300 16px/24px Rubik;
    color: #4F5059;
    text-align: center;
    letter-spacing: 0px;
    text-align: center;
 }
 .google_play_store{
    border: none;
    border: 2px solid #0554F2;
    border-radius: 20px;
    background-color: #FFF;
    padding: 7px 14px;
    font: normal normal bold 14px/17px Rubik;
    letter-spacing: 0.25px;
    color: #0554F2;
    opacity: 1;
 }
 .google_app_store{
    border: none;
    border-radius: 20px;
    background: #0554F2 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 25px #0077FF26;
    padding: 7px 14px;
    font: normal normal bold 14px/17px Rubik;
    letter-spacing: 0.25px;
    color: #FFFFFF;
    opacity: 1;
 }
 `;