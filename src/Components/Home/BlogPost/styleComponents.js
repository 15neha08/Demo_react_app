import styled from "styled-components";

export const BlogPostComponents = styled.div`
     /* height: 900px; */
     background: #222327 0% 0% no-repeat padding-box;
     opacity: 1;
     display: flex;
     justify-content: center;
     align-items: center;
     .blog_post_section{
         max-width: 1100px;
     }
     .blog_post_circle{
         position: absolute;
         bottom: -40px;
         left: -45px;
         height: 100px;
         width: 100px;
         @media only screen and (max-width: 460px) {
            display: none;
         }
        } 
     
     .blog_content{
         padding: 160px 0px;
         @media only screen and (max-width: 460px) {
            padding: 30px 0px;
         }
         .blog_card{
            background: #2F3136 0% 0% no-repeat padding-box;
            border-radius: 4px;
            /* height: 650px; */
            .blog_card_circle{
               position: absolute;
               right: -30px;
               top: 100px;
               width: 100px;
               height: 100px;
               z-index: 0;
            }
            .card-img{
                z-index: 99;
            }
            .card-body{
                padding: 24px;
                .blog_author{
                    text-align: left;
                    font: normal normal 300 14px/21px Rubik;
                    letter-spacing: 0px;
                    color: #878F9D;
                }
                .blog_title{
                    text-align: left;
                    font: normal normal bold 18px/27px Rubik;
                    letter-spacing: 0.32px;
                    color: #FFFFFF;
                }
                .blog_desc{
                    text-align: left;
                    font: normal normal 300 16px/24px Rubik;
                    letter-spacing: 0px;
                    color: #DCDCDC;
                    opacity: 1;
                    min-height: 95px;
                }
                .blog_button{
                    text-align: center;
                    font: normal normal medium 12px/21px Rubik;
                    letter-spacing: 0px;
                    border: none;
                    border-radius: 18px;
                    padding: 5px 16px;
                }
                .productivity_button{
                   @extend .blog_button;
                   background: #0554F2 0% 0% no-repeat padding-box;
                   color: #FFFFFF;
                }
                .technology_button{
                    color: #0554F2;
                    background: #FFFFFF 0% 0% no-repeat padding-box;
                }
            }
         }
         .blog_post{
            font: normal normal 300 18px/27px Rubik;
            letter-spacing: 0px;
            color: #A7A5A5;
            margin-top: 20px;
         }
         .latest-content-heading{
            font: normal normal bold 40px/50px Rubik;
            letter-spacing: 0.71px;
            color: #FFFFFF;
         }
         .blog_benfits{
            text-align: left;
            font: normal normal 300 18px/27px Rubik;
            letter-spacing: 0px;
            color: #A7A5A5;
            margin-right: 40px;
         }
         .customer_benfit_list{
            margin-right: 40px; 
            .customer_benfit_list_items{
                border-bottom: 1px solid #8C8C8C;
            } 
            .blog_benifit_itms_des{
                    text-align: left;
                    font: normal normal bold 16px/24px Rubik;
                    letter-spacing: 0.29px;
                    color: #FFFFFF;
                } 
         }
     }
`;