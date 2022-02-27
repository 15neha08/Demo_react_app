import styled from 'styled-components';
import bg from '../../../Assests/home/bg.png';

export const OurProductComponent = styled.div`
background-image: url(${props => props.imgUrl});
background-repeat : no-repeat;
width: 100%;
opacity: 0.80;
padding: 30px 150px 0px 150px;
position: relative;
  @media only screen and (max-width: 460px) {
    padding : 20px 20px 0px 20px;
  }
  @media screen and (max-width: 461px) and (min-width: 1025px) {
    padding : 20px 20px 0px 50px;
   }

.our_product_heading{
    font: normal normal 300 18px/27px Rubik;
    color: #BFBFBF;
    letter-spacing: 0px;
    text-align: center;
}
.our_product{
    font: normal normal 500 50px/64px Rubik;
    color:  #1A1A1A;
    letter-spacing: 0px;
    text-align: center;
    opacity: 1;
}
.single_circle_product_card{
  position: absolute;
  bottom: 55px;
  left: 60px;
  height : 120px !important;
  width: 130px !important;
  @media only screen and (max-width: 460px) {
    left: 0px;
    bottom: 80px;
    height : 70px !important;
    width: 75px !important;
   }
}
.radiousButton{
    background: #0554F2 0% 0% no-repeat padding-box;
    border-radius: 20px;
    text-align: center;
    font: normal normal 500 14px/17px Rubik;
    letter-spacing: 0.25px;
    color: #FFFFFF;
    border: none;
    padding: 12px 14px;
    width: 150px;
    margin-top: 20px;
    margin-bottom: 20px;
   
    
}
`;