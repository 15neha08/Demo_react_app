import React from 'react'
import { CreativePartnerSection } from './styleComponents';
import FeatureCard from '../../Card';
import { brandingCardList } from '../../../Constants/Branding/brandingCardList';

function CreativePartner() {
    return (
        <CreativePartnerSection>
            <div className='agile_main_section'>
                <div className='agile_heading_box'>
                    <div className='agile_heading text-center'>Strategy. Branding. Design. Delivered.</div>
                    <div className='agile_sub_heading my-2 text-center'>Looking for a creative partner?<span className='agile_sub_heading_span'>Let’s talk.</span></div>
                    <div className='d-flex justify-content-center'>
                        <div className='agile_para text-center '>ZCS is a full-service creative and consulting firm that helps visionary companies emphasize their strengths and elevate their brands. With a complete range of creative capabilities, we craft authentic brand experiences that engage and inspire audiences at every touch point.</div>
                    </div>
                </div>
                <div className='d-flex justify-content-center flex-wrap no-gutters mb-5'>
                {brandingCardList.map((val, index) => (
                        <div className='col-lg-3 mb-3 px-3'>
                            <FeatureCard
                                img={val.img}
                                feature={val.description}
                                type={val.type}
                                control={false}
                                index={index}
                                pinIcon=''
                                dataAos='fade-up'
                                cardFooterBg={val.cardFooterBg}
                                brandingCard={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </CreativePartnerSection>
    )
}
export default CreativePartner;