import styled from "styled-components";

export const CommercialBg = styled.div`
.zcs-navbar{
    box-shadow : 0px 3px 6px #00000029;
    background-color : #fff !important;
    position: fixed;
    width: 100vw;
    z-index : 99999;
    .logo-toggler{
      border : none;
    }
    .navbar-items-list {
      .nav-item {
          a{
            color : #8C8C8C;
            font: normal normal normal 16px/19px Rubik;
          }
          &:active,&.active{
              a {
                color: #0D0D0D;
              }
           }
      }
    }
}
.contact-us {
    background-color :   #0554F2;
    border : none;
    border-radius : 20px;
    font :  normal normal normal 16px/19px Rubik;
    padding : 8px 15px;
    color : #FFF;
    
}
  
`;