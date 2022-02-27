import React from 'react'
import { GotoToolComponent } from './styleComponents'
import brandingGroup from '../../../Assests/brandingPage/branding_group.png';
import toolIcon from '../../../Assests/brandingPage/tools_icons.png';

function GotoTools() {
    return (
        <GotoToolComponent>
            <div className='gotoTools_section'>
                <div className='main_section'>
                    <div className='row no-gutters '>
                        <div className='col-6 col-lg-6'>
                            <div className='toolbox'>
                                <img src={toolIcon} alt='tools' height='40px' width='40px'/> 
                            </div>
                            <div className='gotoTools_heading pt-3'>Our go-to tools to design the ideal</div>
                            <div className='gotoTools_para'>To showcase a design’s interactivity with the numerous prototyping as well as designing tools available in our workshop to develop the ideal interactive model for the design or product concept.</div>
                            <div className='read_more my-5'>READ MORE</div>
                        </div>
                        <div className='col-6 col-lg-6'>
                            <img src={brandingGroup} alt='brandingGroup' width='100%' />
                        </div>
                    </div>
                </div>
            </div>
        </GotoToolComponent>
    )
}
export default GotoTools;