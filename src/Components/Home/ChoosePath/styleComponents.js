import styled from 'styled-components';

export const ChoosePathSection = styled.div`
  padding: 30px 150px 0px 150px;
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
   .choose_your_path{
    max-width: 1500px;
   }
  .expertise{
    font: normal normal bold 16px/24px Rubik;
    letter-spacing: 0px;
    color: #0D0D0D;
    margin-left: 25px;
      .dash{
        border: 2px solid #292A34;
        width: 50px;
      }
      
  }
  .choose_path{
    font: normal normal bold 54px/60px Rubik;
    color: #404040;
    margin-left: 20px;
    @media only screen and (max-width: 460px) {
      font: normal normal bold 40px/40px Rubik;
    }
  }
  .feature_path_card_list{
    margin: 10px 0px 50px 0px;
    position: relative;
  }
  .feature_path_card_list_circle{
    position: absolute;
    bottom: -45px;
    left: -65px;
    height: 120px;
    width: 150px;
  }
`;