import styled from 'styled-components';

export const RemoteWorked = styled.div`
   padding : 20px 140px 0px 170px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media only screen and (max-width: 460px) {
    padding : 20px 20px 0px 20px;
    }
    @media screen and (max-width: 461px) and (min-width: 1025px) {
    padding : 20px 20px 0px 50px;
    }
   .power_remote{
     max-width: 1500px;
   }

  .heading{
      color: #0D0D0D;
      font: normal normal bold 54px/60px Rubik;
      text-align: left;
      margin-top: 90px;
      padding: 0px 1rem 0px 0rem;
      @media only screen and (max-width: 460px) {
        padding: 0px 0px 0px 1rem;
        font: normal normal bold 40px/40px Rubik;
      }
      @media screen and (max-width: 461px) and (min-width: 1025px) {
        padding: 0px 0px 0px 1rem;
      }
  }
  .combining{
    font : normal normal 300 18px/27px Rubik;
    color: #404040;
    text-align: left;
    margin-right: 80px;
    padding: 0px 1.5rem 0px 0rem;
    @media only screen and (max-width: 460px) {
      padding: 0px 0px 0px 1rem;
      margin-right: 0px;
      font : normal normal 300 14px/20px Rubik;
    }
    @media screen and (max-width: 461px) and (min-width: 1025px) {
      padding: 0px 0px 0px 1rem;
      margin-right: 0px;
    }
  }
  .power_remote_img_box{
    position: relative;
   
  }
  .power_remote_img{
      position: absolute;
      right: 70px;
      top: 35px;
      @media only screen and (max-width: 460px) {
       right: 0px;
       top: 0px;
      }
      @media screen and (max-width: 461px) and (min-width: 1025px) {
       right: 0px;
       top: 0px;
      }
  }
  .feature_card_list{
    margin-top: -30px;
    @media only screen and (max-width: 460px) {
      margin-top: -50px;
    }
  }
`;