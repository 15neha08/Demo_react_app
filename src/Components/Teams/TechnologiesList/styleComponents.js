import styled from "styled-components";

export const TechnologiesLists = styled.div`
  .technologies_name_list{
      background: #BFBFBF 0% 0% no-repeat padding-box ;
      padding: 30px 0px 30px 40px;
      @media only screen and (max-width: 460px) {
        padding: 20px 10px 20px 10px;
      }
     
      .technologies_names{
        font: normal normal 600 18px/27px Rubik;
        letter-spacing: 0px;
        color: #F2F2F2;
        cursor: pointer;
        padding: '10px 20px !important' ;
      }
      .active_technologies_names{
        font: normal normal 600 18px/27px Rubik;
        letter-spacing: 0px;
        color: #0554F2;
        border-bottom : 2px solid #0554F2;
        cursor: pointer;
        padding: '10px 20px  !important';
      }
    }
    .technologies_items_div{
      padding : 50px 140px 50px 170px;
      display: flex;
      justify-content: center;
      align-items: center;
      .technologies_items_box{
        max-width: 1500px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      @media only screen and (max-width: 460px) {
        padding : 50px 40px 50px 40px;
      }
    }

`;