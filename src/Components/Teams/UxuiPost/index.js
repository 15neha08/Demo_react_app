import React from 'react';
import { UiuxPostSection } from './styleComponents';
import PostCards from '../PostCards';
import internetBanner from '../../../Assests/teams/post/internetBanner.jpg';
import seoImg from '../../../Assests/teams/post/seo_img.png';
import seoflyersUnrivaledImg from '../../../Assests/teams/post/flyers_unrivaled.png';

function UiuxPost() {
    return (
        <UiuxPostSection>
            <div className='uiux_section'>
                <div className='row no-gutters w-100'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-10'>
                        <div className='uxui_heading'>Our Latest UI UX Posts</div>
                        <div className='uxui_sub_heading'>Accelerate Your Digital Transformation with our experts advice and case industry specific blogs</div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>

                <div className='row no-gutters' style={{ margin: '50px 0px 100px 0px' }}>
                    <div className='col-lg-3'>
                        <PostCards
                            banner={false}
                            cardImg={seoImg}
                            cardHead={true}
                            title='Search Engine And Optimization'
                            descripttion='Marketers/advertisers usually focus their efforts'
                        />
                        <div style={{ marginTop: '30px' }}>
                            <PostCards
                                banner={true}
                                cardHead={false}
                                postButtonText='Designing'
                                title='Tips For Designing An Effective'
                                descripttion='There are many ways'
                            />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <PostCards
                            banner={true}
                            cardHead={true}
                            postButtonText='UI UX'
                            
                            cardImg={internetBanner}
                            title='Internet Banner Advertising Most Reliable Forms Of Web Advertising'
                            descripttion='You don’t need to have a full time ecommerce business to earn a little extra money through your website don’t even need'
                        />
                    </div>
                    <div className='col-lg-3'>
                        <div style={{ marginBottom: '30px' }}>

                            <PostCards
                                banner={true}
                                cardHead={false}
                                postButtonText='Designing'
                                title='Effective Advertising Pointers'
                                descripttion='Conversations can be a tricky'
                            />
                        </div>
                        <PostCards
                            banner={false}
                            cardHead={true}
                            cardImg={seoflyersUnrivaledImg}
                            title='What Makes Flyers Unrivaled'
                            descripttion='You don’t need to have a full time ecommerce'
                        />
                    </div>
                </div>

            </div>
        </UiuxPostSection>
    )
}
export default UiuxPost
