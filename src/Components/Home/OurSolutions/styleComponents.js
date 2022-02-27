import styled from 'styled-components';


export const OurSolutionComponents = styled.div`
background: transparent linear-gradient(236deg, #292A2E 0%, #1F2024 100%) 0% 0% no-repeat padding-box;
min-height: 944px;
padding: 30px 150px 0px 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;

@media screen and (max-width: 461px) and (min-width: 1025px) {
    padding: 30px 40px 0px 40px;
}
@media only screen and (max-width: 460px) {
    padding: 30px 30px 0px 30px;
}
.solution_side_image{
    position: absolute;
    right: 0px;
    top: -100px;
    @media only screen and (max-width: 460px) {
    display: none;
   }
}
.solution_side_image2{
    position: absolute;
    height: 120px;
    width: 200px;
   bottom: 0px;
   @media only screen and (max-width: 460px) {
       display: none;
    }
  
}
 .our_solution{
    max-width: 1500px;
 }
.our_solution_heading{
    font: normal normal 300 18px/27px Rubik;
    color: #BFBFBF;
    letter-spacing: 0px;
    text-align: center;
    padding-top: 50px;
}
.our_solution{
    font: normal normal 500 50px/64px Rubik;
    color:  #FFFFFF;
    letter-spacing: 0px;
    text-align: center;
    @media only screen and (max-width: 460px) {
        font: normal normal 500 30px/40px Rubik;
    }
}
.solution_list{
    /* width: 400px; */
    padding: 50px 0px;
    @media only screen and (max-width: 460px) {
        padding: 25px 0px;
    }
    .solution_icon_bg{
        height: 95px;
        width: 95px;
        border-radius: 50%;
        background-color: #FFFFFF;
        position: relative;
        .solutions_icons{
         position: absolute;
         top: 35%;
         left: 33%;
        }
    }
    .solution_name{
        padding-top: 20px;
        font: normal normal 500 18px/27px Rubik;
        color: #F2F2F2;
        opacity: 1;
        text-align: center ;
    }
    .solution_explaination{
        padding-top: 30px;
        font: normal normal 300 16px/24px Rubik;
        color: #8C8C8C;
        letter-spacing: 0px;
        text-align: center;
        
    }
}
.horizental_line{
    color: 'red';
    background-color: '#8C8C8C';
    height: 4;
    width: 120;
    margin: 'auto';
    margin-top: '50px'; 
    @media only screen and (max-width: 460px) {
       display: none;
    }
}

.about_more{
    font: normal normal normal 16px/24px Rubik;
    letter-spacing: 0.29px;
    color: #FFFFFF;
    text-align: center;
}
.contact_us{
    border: none;
    background: #0554F2 0% 0% no-repeat padding-box;
    border: 2px solid #0554F2;
    border-radius: 20px;
    color: #FFF;
    padding: 7px 25px;
    font: normal normal normal 14px/17px Rubik;
    letter-spacing: 0.25px;

}
`;