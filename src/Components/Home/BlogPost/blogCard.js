import React from 'react';
import { FeatureCardDetails } from './styleComponents';
import arrow from '../../Assests/home/Icon feather-arrow-right-circle.png'


function BlogCard({img,feature,type,benifit,control,padding,arrowImage}) {
    console.log(arrow,"arrow");
    return (
        <FeatureCardDetails padding={padding}>
            <div className={control ? 'path-card' : 'feature-card'} >
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className={control ? "path-title" : "feature-title"}>{feature}</h5>
                    <p className={control ? "path-type" : "feature-type"}>{type}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='control'>{benifit}</div>
                       {arrowImage ? <img src={arrow} alt=''/> : null }
                    </div>
                </div>
           </div>
        </FeatureCardDetails>
    )
}
export default BlogCard;