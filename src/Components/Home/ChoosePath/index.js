import React,{useEffect} from 'react';
import { ChoosePathSection } from './styleComponents';
import { choosePathData } from '../../../Constants/Home/FeatureCardList';
import FeatureCard from '../../Card/index';
import singleCircle from '../../../Assests/home/single_circle.png';
import angleDoubleCircle from '../../../Assests/home/angle_double_circle.png';
import doubleCircle from '../../../Assests/home/double_circle.png';


function ChoosePath() {
  
    return (
        <ChoosePathSection>
            <div className='choose_your_path' >
                <div className='d-flex flex-wrap justify-content-between align-items-center mt-5'>
                    <div className='d-flex flex-column'  >
                        <div className='expertise' >
                            Our Expertise
                        </div>
                        <div className="choose_path ">Choose your path.</div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-2'>
                      <img src={angleDoubleCircle} alt='angleDoubleCircle'width='120px' height='120' className='mx-5'/>
                      <img src={doubleCircle} alt='doubleCircle' width='80px' height='40px' />
                    </div>
                </div>
                <div className='row no-gutters feature_path_card_list'>
                    {choosePathData.map(val => (
                        <div className='col-lg-4 mb-3'>
                            <FeatureCard
                                img={val.img}
                                feature={val.feature}
                                type={val.type}
                                control={true}
                                benifit={val.benfit}                              
                                arrowImage={true}
                                dataAos='fade-up'
                            />
                        </div>

                    ))}
                   <img src={singleCircle} alt="singleCircle"  dataAos='fade-up' data-aos-duration="3000" className='feature_path_card_list_circle'/>
                </div>
            </div>
        </ChoosePathSection>
    )
}
export default ChoosePath;