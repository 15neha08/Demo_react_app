import React from 'react';
import { PostCardSection,CardTitle,CardDiscription } from './styleComponents';

function PostCards({banner,cardHead,cardImg,title,descripttion,postButtonText}) {
    return (
        <PostCardSection>
            <div class="post_card">
                {cardHead ?<img src={cardImg} alt='cardImg' className={banner ? 'banner_post_card_img' : 'post_card_img'} width='100%'/> : <div style={{display : 'none'}}></div>}
                <div class={`px-3 ${banner ? 'banner_card_body py-4' : 'card_body py-2'}`}>
                    <CardTitle titleText={banner ? '#404040' : '#FFFFFF' }>{title}</CardTitle>
                    <CardDiscription discriptionTextColor={banner ? '#8C8C8C' : '#FFFFFF' }>{descripttion}</CardDiscription>
                    {banner ?
                    <div className={`d-flex justify-content-between my-2`}>
                        <div className='posted_time'>14 hours ago</div>
                        <button className={postButtonText === 'Designing' ? 'designing_posted_button' : 'posted_button'}>{postButtonText}</button>
                    </div> : null}
                </div>
            </div>

        </PostCardSection>
    )
}
export default PostCards;