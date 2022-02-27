import React,{useEffect} from 'react';
import { OurSolutionComponents } from './styleComponents';
import { serviceList } from '../../../Constants/Home/OurServiceList';
import bg1 from '../../../Assests/home/bg1.png';
import bg2 from '../../../Assests/home/bg2.png';


function OurSolutions() {
  
    return (
        <OurSolutionComponents >
            <div className="our_solution" dataAos='fade-up'  data-aos-duration="3000" >
                <img src={bg1} alt="bg1" dataAos='flip-left' className="solution_side_image" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000" />
                <p className='our_solution_heading'>Our Solutions</p>
                <div className='our_solution'>A Solution For Every </div>
                <div className='our_solution'>Situation </div>
                <div className='row no-gutters' style={{position : 'relative'}}>
                    {serviceList.map((val, index) => (
                        <div className='col-lg-4'>
                            <div className='solution_list' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
                                <div className='d-flex justify-content-center'>
                                    <div className='solution_icon_bg'>
                                        <img src={val.img} alt={val.img} className='solutions_icons' />
                                    </div>
                                </div>
                                <p className='solution_name'>{val.title}</p>
                                <p className='solution_explaination'>{val.description}</p>
                                {index == 1 ? <hr
                                    className="horizental_line"
                                    style={{
                                        color: 'red',
                                        backgroundColor: '#8C8C8C',
                                        height: 4,
                                        width: 120,
                                        margin: 'auto',
                                        marginTop: '50px'
                                    }}
                                /> : null}
                            </div>
                        </div>
                    ))}
                    <img src={bg2} alt="bg2" className="solution_side_image2"/>
                </div>
                <p className='about_more'>Do you have more questions about our products?</p>
                <div className='d-flex justify-content-center my-4'> <button className='contact_us'>CANTACT US</button></div>
                
            </div>
        </OurSolutionComponents>
    )
}
export default OurSolutions;