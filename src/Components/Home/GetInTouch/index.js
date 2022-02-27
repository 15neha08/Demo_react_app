import React, {useEffect} from 'react';
import { GetTouchSection } from './styleComponents';
import contact from '../../../Assests/home/contact1.png';
import doubleCircle from '../../../Assests/home/double_circle.png';
import { sendRequestSource } from '../../../Constants/Home/GetInTouch';


function GetInTouch() {
  
    return (
        <GetTouchSection>
            <div className='get_Touch_Section' dataAos='fade-up' data-aos-duration="3000">
                <div>
                    <div  style={{ position: 'absolute', right: '0px', top: '0px' }}>

                    <img src={contact} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000"  alt='contact' className='touch_image' />
                    <img src={doubleCircle} alt='contact' className='double_circle_touch_image' style={{ position: 'absolute', right: '40px', bottom: '0px' }} />
                    </div>

                    <div className='row no-gutters'>
                        <div className='col-lg-6 getTouchHeading' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
                            <div className="getIntouchText">GET IN TOUCH</div>
                            <div className="getIntouchTextHeading"> Let’s make <br /> business together   </div>
                            <div className="getIntouchTextPara">Implement solutions with impact. Digitize all aspects of your  <br />  business and gain the technological advantage cooperating  <br />  with commerce transformation experts.</div>
                        </div>
                        <div className='col-lg-6' >
                            {/* <img src={doubleCircle} alt='contact' style={{ position: 'absolute', right: '0px', top: '0px' }} /> */}
                        </div>
                    </div>
                    <div className='d-flex justify-content-between flex-wrap align-items-center send_message_section  mb-3' data-aos="fade-up" data-aos-duration="3000">
                        <p className='send-request' dataAos='fade-up' data-aos-duration="3000">Send your request</p>
                        <div className='send-request-text'>Grow your team and expand your software development capabilities  <br />  with a reliable tech partner by your side. Grow your team and expand  <br />  your software development capabilities with a reliable tech partner by  <br />  your side.</div>
                    </div>
                    <div className='d-flex justify-content-between flex-wrap  my-5 mb-3' data-aos="fade-up" data-aos-duration="3000">
                        {
                            sendRequestSource && sendRequestSource.map(val => (
                                <div className='d-flex align-items-center resourse_list  p-0'>
                                    <div className='send_source_icons'>
                                        <img src={val.img} alt="img" className="social_icons" />
                                    </div>
                                    <div className="px-3">
                                        <div className="contact_source_name">{val.title}</div>
                                        <div className="contact_source_details">{val.value}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </GetTouchSection>
    )
}
export default GetInTouch;

