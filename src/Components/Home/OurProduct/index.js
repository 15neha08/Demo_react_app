import React from 'react';
import { OurProductComponent } from './styleComponents';
import bg from '../../..//Assests/home/bg.png';
import ProductCard from '../../ProductCard';
import { productCardList } from '../../../Constants/Home/OurServiceList';
import singleCircle from '../../../Assests/home/single_circle.png';
import angleDoubleCircle from '../../../Assests/home/angle_double_circle.png';

function OurProduct() {
    return (
        <OurProductComponent imgUrl={bg}>
            <div className='row'>
                <div className='col-lg-4'>

                </div>
                <div className='col-lg-4'>
                    <p className='our_product_heading'>Our Product</p>
                    <div className='our_product'>Radious App </div>
                </div>
                <div className='col-lg-4'>
                    <div className='d-flex justify-content-end'>
                        <img src={angleDoubleCircle} alt='angleDoubleCircle' />
                    </div>
                </div>
            </div>
            <div className='row no-gutter mt-3' >
                {productCardList.map(val => (
                    <div className='col-lg-6 mb-3'>
                        <ProductCard val={val} />
                    </div>
                ))}
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <hr
                        style={{
                            backgroundColor: '#0554F2',
                            height: 2,
                            width: 70,
                            margin: 'auto',
                            marginTop: '20px',
                            opacity: 1,
                        }}
                    />
                    <button className='radiousButton '>www.radious.in</button>
                </div>

            </div>
            <img src={singleCircle} alt="singleCircle"  className='single_circle_product_card' />

        </OurProductComponent>
    )
}
export default OurProduct;