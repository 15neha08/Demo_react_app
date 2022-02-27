import React, { useEffect, useState } from 'react';
import { technologiesListItems } from '../../../Constants/Teams/devlopmentTeamsList';
import { TechnologiesLists } from './styleComponents';
import { uxuiTechnologies, backendTechnologies, cloudTechnologies, cmsTechnologies, devOpsTechnologies, frameWorks, mobileTechnologies, testingTechnologies, webTechnologies } from '../../../Constants/Teams/teamsDetails';

function TechnologiesList() {
    const [activeTechnologies, setActiveTechnologies] = useState(0)
    const [activeItemsList, setActiveItemsList] = useState(uxuiTechnologies)
    console.log(activeItemsList,"nehhhha");
    const handleClick = (index) => {
        setActiveTechnologies(index)
    }

    useEffect(() => {

        switch (activeTechnologies) {
            case 0:
                setActiveItemsList(uxuiTechnologies)
                break;
            case 1:
                setActiveItemsList(cloudTechnologies)
                break;
            case 2:
                setActiveItemsList(webTechnologies)
                break;
            case 3:
                setActiveItemsList(mobileTechnologies)
                break;
            case 4:
                setActiveItemsList(devOpsTechnologies)
                break;
            case 5:
                setActiveItemsList(backendTechnologies)
                break;
            case 6:
                setActiveItemsList(cloudTechnologies)
                break;
            case 7:
                setActiveItemsList(cmsTechnologies)
                break;
            case 8:
                setActiveItemsList(frameWorks)
                break;
        }

    }, [activeTechnologies])
    return (
        <TechnologiesLists>
            <div className='technologies_name_list'>
                <div className='d-flex justify-content-between flex-wrap'>
                    {technologiesListItems.map((val, index) => (
                        <div className={activeTechnologies == index ? 'active_technologies_names ' : 'technologies_names '} onClick={() => handleClick(index)}>{val}</div>
                    ))}
                </div>
            </div>
            <div className='technologies_items_div'>
                <div className='technologies_items_box'>
                    {activeItemsList?.map(val => (
                        <img src={val} alt={val} className='my-2 mx-2' />
                    ))}
                </div>
            </div>
        </TechnologiesLists>
    )
}

export default TechnologiesList;
