import React from 'react'
import { AgileSection } from './styleComponents';
import FeatureCard from '../../Card';
import { devlopmentTeamList } from '../../../Constants/Teams/devlopmentTeamsList';
function AgileSoftwareTeams() {
    return (
        <AgileSection>
            <div className='agile_main_section'>
                <div className='agile_heading_box'>
                    <div className='agile_heading text-center'>Agile Software Development Teams</div>
                    <div className='agile_sub_heading my-2 text-center'>Let Us Be Your Nearshore Technology Ally.</div>
                    <div className='d-flex justify-content-center'>
                        <div className='agile_para text-center '>We work agile, with certified scrum methodology, feature-driven creations, and lean software development. The clarity brought by Agile and the focus on delivering small features sooner in the development cycle help simplify definition and delivery by incrementally solving complex problems.</div>
                    </div>
                </div>
                <div className='d-flex justify-content-center flex-wrap no-gutters mb-5'>
                    {devlopmentTeamList.map((val, index) => (
                        <div className='col-lg-3 mb-3 px-3'>
                            <FeatureCard
                                img={val.img}
                                feature={val.description}
                                type={val.type}
                                control={false}
                                index={index}
                                pinIcon=''
                                dataAos='fade-up'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </AgileSection>
    )
}
export default AgileSoftwareTeams;