import styled from 'styled-components';

export const FooterCantainer = styled.div`
  width : 100%;
  background: #1A1A1A 0% 0% no-repeat padding-box;
  min-height : 320px;
  display: flex;
  justify-content: center;
  padding : 76px 150px 0px 150px;
  @media only screen and (max-width: 760px) {
    padding : 76px 20px 0px 20px;
  }
  

   @media only screen and (max-width: 1025px) {
    padding : 76px 20px 0px 40px;
  }
  .footer-items{
    width : 1500 !important;
    .footer-logo{
        .footer-logo-containt{
          color : #A7A5A5;
          font: normal normal 300 14px/21px Rubik;
          letter-spacing: 0px;
          opacity : 1;
          padding: ;
        }
    }
    .product-list{
        ul{
            li{
                a{
                    color : #FFF;
                    font: normal normal normal 14px/21px Rubik;
                    text-align : left ;
                    letter-spacing: 0px;
                }
            }
        }
    }
   }
   hr{
      margin-top : 66px;
      border : 1px solid #404040;
      margin-left : 40px;
      @media only screen and (max-width: 760px) {
        margin-left : 20px;
      }
   }
   .policies{
     margin-left : 26px;
      .copy-right{
        font: normal normal 300 12px/21px Rubik;
        letter-spacing : 0px;
        color : #A7A5A5;
        cursor: pointer;
      } 
      @media only screen and (max-width: 760px) {
        margin-left : 16px;
      }
    }
   .social_media_icons{
     cursor: pointer;
   }
}
`;