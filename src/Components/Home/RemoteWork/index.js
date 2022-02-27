import React, {useEffect} from 'react';
import { RemoteWorked } from './styleComponents';
import FeatureCard from '../../Card';
import { featureListData } from '../../../Constants/Home/FeatureCardList';
import Hero from '../../../Assests/home/Hero.png';


function RemoteWork() {
   
    return (
        <RemoteWorked>
            <div className='power_remote'>
                <div className='row no-gutters'>
                    <div className='col-lg-7' data-aos="fade-up" data-aos-duration="3000" >
                        <p className='heading' >IT powers remote work. We power IT.</p>
                        <p className='combining '>ZCS is combining state-of-the-art technology with certified industry specialists to deliver smarter solutions, faster. By pairing industry insights with customer trends, we learn from every interaction to deliver personalized, intelligent resolutions.</p>
                    </div>
                    <div className='col-lg-5'  style={{minHeight : '500px'}}>
                       <div className='power_remote_img_box' >
                        <img src={Hero} alt="hero" className='power_remote_img' />
                       </div>
                    </div>
                </div>
                <div className='row no-gutters feature_card_list' >
                    {featureListData.map((val,index) => (
                        <div className='col-lg-3 mb-3'>

                            <FeatureCard
                                img={val.img}
                                feature={val.feature}
                                type={val.type}
                                control={false}
                                index={index}
                                pinIcon={val.pinIcon}
                                dataAos='fade-up'
                            />
                        </div>
                    ))}
                </div>

            </div>
        </RemoteWorked>
    )
}
export default RemoteWork;