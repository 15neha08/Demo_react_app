import React from 'react';
import { UxuiServicesComponent } from './styleComponents';
import content from '../../../Assests/brandingPage/content.png';


function UxuiServicees() {
    return (
        <UxuiServicesComponent>
            <div className='Uxui_services_main'>
                <div className='row no-gutters' >
                    <div className='col-6 col-lg-6'>
                        <div className='UxuiServices_heading py-4'>Branding & UI UX Services</div>
                        <div className='UiuxServices_para '>
                            It’s no surprise that our web design clients are often the same companies who hired us for UI/UX design projects, because who can explain the product better than the people who designed it? We’re a web design agency that believes a great website should efficiently convert visitors to customers while providing a delightful web experience that’s true to the brand.
                        </div>
                        <div className='uxuiServices_subheading py-3'>Talk to our expert to know about us -</div>
                        <button className='read_more'>Read More</button>
                    </div>
                    <div className='col-6 col-lg-6'>
                        <img src={content} alt='content' />
                    </div>
                </div>
            </div>
        </UxuiServicesComponent>
    )
}
export default UxuiServicees;