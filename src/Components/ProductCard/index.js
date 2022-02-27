import React, { useEffect } from 'react';
import { ProductCardComponent } from './styleComponents';


function ProductCard({ val }) {
    
    return (
        <div className={`d-flex justify-content-${val.position}`} >
            <ProductCardComponent cardColor={val.backgroundColor} data-aos="flip-left" data-aos-duration="3000">
                <div className='px-3'>
                    <div className='d-flex justify-content-center my-4'>
                        <img src={val.img} alt="img" />
                    </div>
                    <div className='card_title my'>{val.title1}</div>
                    <div className='card_title'>{val.title2}</div>
                    <div className='card_description py-3'>{val.description}</div>
                    <div className='d-flex justify-content-center'>
                        <button className={val.buttonClassName}><img src={val.buttonIcon} alt='buttonIcon'/><span className='px-2'>{val.buttonText}</span></button>
                    </div>
                </div>
            </ProductCardComponent>
        </div>
    )
}
export default ProductCard;