import React, {useEffect} from 'react';
import { FeatureCardDetails } from './styleComponents';
import arrow from '../../Assests/home/Icon feather-arrow-right-circle.png'


function FeatureCard({ img,dataAos, pinIcon, feature, type, benifit, control, padding, arrowImage,cardFooterBg,brandingCard }) {
    
    return (
        <FeatureCardDetails padding={padding} >
            <div className={control ? 'path-card' : 'feature-card'}  data-aos={dataAos} data-aos-duration="1000" >
                <div className='card_img_box'>
                    {pinIcon ? <img src={pinIcon} alt='pinIcon' className='pin_icon' /> : null}
                    <img className="card-img-top" src={img} alt="Card image cap" />
                </div>
                <div className="card-body pb-1" style={{backgroundColor : `${cardFooterBg}`}}>
                    <h5 className={control ? "path-title" : brandingCard ? "brand-title" : "feature-title"} >{feature}</h5>
                    <div className={control ? "path-type" : brandingCard ? "brand-type" : "feature-type"}>{type}</div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='control'>{benifit}</div>
                        {arrowImage ? <img src={arrow} alt='' style={{ cursor: 'pointer' }} /> : null}
                    </div>
                </div>
            </div>
        </FeatureCardDetails>
    )
}
export default FeatureCard;