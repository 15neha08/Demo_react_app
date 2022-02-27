import styled from 'styled-components';

export const GetTouchSection = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  padding: 30px 150px 0px 150px;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 460px) {
    padding : 20px 20px 0px 40px;
  }
.get_Touch_Section{
  width: 1500px;
}
.touch_image{
  position: relative;
  z-index: 99;
  @media only screen and (max-width: 460px) {
   display: none;
  }
}
.double_circle_touch_image{
  position: 'absolute';
   right: '40px';
    bottom: '0px';
  @media only screen and (max-width: 460px) {
   display: none;
  }
}
 .getTouchHeading{
    .getIntouchText{
    font: normal normal 300 18px/27px Rubik;
    color: #A7A5A5;
    text-align: left; 
  }
  .getIntouchTextHeading{
    font: normal normal bold 50px/64px Rubik;
    letter-spacing: 0.89px;
    color: #0D0D0D;
    text-align: left;
    @media only screen and (max-width: 460px) {
      font: normal normal bold 50px/54px Rubik;
    }
  }
  .getIntouchTextPara{
    margin-top: 50px;
    margin-bottom: 30px;
    font: normal normal 300 18px/27px Rubik;
    color: #1A1A1A;
    text-align: left;
  }
 }
 .send_message_section{
   margin-top: 150px;
   @media only screen and (max-width: 460px) {
      margin-top: 50px;
    }
 }
 .send-request{
  font: normal normal bold 16px/24px Rubik;
  letter-spacing: 0.29px;
  color: #292A34;
 }
 .send-request-text{
  font: normal normal 300 14px/21px Rubik;
  color: #A7A5A5;
 }
 .resourse_list{
   margin: 3rem 0 3rem 0;
   @media only screen and (max-width: 460px) {
    margin: 0.5rem 0 0.5rem 0;
    }
 }
 .send_source_icons{
   height: 72px;
   width: 72px;
   background-color: #0554F2;
   border-radius: 50%;
     position: relative;
     .social_icons{
       position: absolute;
       top: 20px;
       left: 20px; 
   } 
 }
 .contact_source_name{
    font: normal normal bold 16px/24px Rubik;
    letter-spacing: 0.29px;
    color: #0554F2;
  }
  .contact_source_details{
    font: normal normal normal 16px/24px Rubik;
    color: #878F9D;
    letter-spacing: 0px;
  }
 
`;