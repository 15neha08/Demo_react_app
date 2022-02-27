import React from 'react'
import { TechnologiesContainer } from './styleComponents';
import { uxuiTechnologies, backendTechnologies, cloudTechnologies, cmsTechnologies, devOpsTechnologies, frameWorks, mobileTechnologies, testingTechnologies, webTechnologies } from '../../Constants/Teams/teamsDetails';
import { socialList } from '../../Constants/Teams/socialLink';
function TechnologiesList() {
    const technologiesListItemsName = [
        {
            name: 'UI UX & Creatives',
            items: uxuiTechnologies
        },
        {
            name: 'Cloud Technologies',
            items: cloudTechnologies
        },
        {
            name: 'Web Technologies',
            items: webTechnologies
        },
        {
            name: 'Mobile Technologies',
            items: mobileTechnologies
        },
        {
            name: 'DevOps',
            items: devOpsTechnologies
        }, {
            name: 'Backend Technologies',
            items: backendTechnologies
        }, {
            name: 'CMS',
            items: cmsTechnologies
        },
        {
            name: 'Frameworks',
            items: frameWorks
        },
        {
            name: 'Testing',
            items: testingTechnologies
        }
    ]
    return (
        <TechnologiesContainer>
            <div className='technologies_containeres'>
                {technologiesListItemsName.map(val => (
                    <div className='my-5'>
                        <div className='technologies_name mx-4'>{val.name}</div>
                        <div className='d-flex justify-content-center flex-wrap' >
                            {val.items?.map(el => (
                                <img src={el} alt={el} className='my-2 mx-2' />
                            ))}
                        </div>
                    </div>
                ))}

                <div className='my-5'>
                    {socialList.map(val => (
                        <div className='d-flex align-items-center py-2'>
                           <img src={val.img} className='social_icons' height='20px' width='20px' />
                           <div className='mx-2 social_link word-wrap'>{val.link}</div>
                        </div>
                    ))}
                </div>
            </div>
        </TechnologiesContainer>
    )
}
export default TechnologiesList