import styled from "styled-components";

export const PostCardSection = styled.div`
    
   .post_card{
       background:  #FFFFFF 0% 0% no-repeat padding-box;
       box-shadow: 0px 11px 35px #0000000D;
       border-radius: 8px;
       .banner_card_body{
           background-color: #FFFFFF;
           
       }
       .card_body{
           background-color: #0554F2;
       }   
       .banner_post_card_img{
          min-height: 260px;
       }
       .post_card_img{
        max-height: 115px; 
       }
        .posted_time{
            font: normal normal normal 14px/21px Rubik;
            letter-spacing: 0px;
            color: #292A34;
        }
        .posted_button{
            border: 1px solid #0554F2;
            border-radius: 15px;
            font: normal normal normal 12px/21px Rubik;
            letter-spacing: 0px;
            color: #0554F2;
            background-color: #fff;
            padding: 1px 20px;
        }
       .designing_posted_button{
            border: 1px solid #0554F2;
            border-radius: 15px;
            font: normal normal normal 12px/21px Rubik;
            letter-spacing: 0px;
            background-color: #0554F2;
            color: #fff;
            padding: 3px 20px; 
       }
   }
`;

export const CardTitle = styled.div`
    font: normal normal bold 18px/27px Rubik;
    letter-spacing: 0px;
    text-align: left;
    color: ${props => props.titleText || '#404040'}; 
`;

export const CardDiscription = styled.div`
    padding: 10px 0px;
    text-align: left;
    font: normal normal 300 16px/24px Rubik;
    letter-spacing: 0px;
    color: ${props => props.discriptionTextColor || '#8C8C8C'};
`;