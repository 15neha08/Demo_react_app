import React, {useEffect} from 'react';
import { BlogPostComponents } from './styleComponents';
import blog_img from '../../../Assests/home/blog_img.png';
import blog_img1 from '../../../Assests/home/blog_img1.png';
import sinleCircle from '../../../Assests/home/single_circle.png';
import { blogList } from '../../../Constants/Home/BlogList';


function BlogPost({ }) {
   
    return (
        <BlogPostComponents>
            <div className='blog_post_section' >
                <div className='row no-gutters mx-0  blog_content'>
                    <div className='col-lg-4 mb-3' data-aos="fade-up" data-aos-duration="3000">
                        <p className='blog_post'>BLOG POSTS</p>
                        <div className='text-white latest-content-heading'>Read Our Latest Content</div>
                        <div className=' blog_benfits mt-3'>Accelerate Your Digital Transformation with our experts advice and case industry specific blogs</div>
                        <ul className='mt-5 px-0 customer_benfit_list' style={{ position: 'relative' }}>
                            {blogList.map(val => (
                                <li className={val.class}>
                                    <div className='py-3 blog_benifit_itms_des'>{val.feature}</div>
                                </li>
                            ))}
                            <img src={sinleCircle} alt='sinleCircle' className='blog_post_circle' />
                        </ul>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <div className='blog_card' data-aos="fade-up" data-aos-duration="3000">
                            <img className="card-img-top" src={blog_img} alt="blog_img" />

                            <div className="card-body">
                                <p className='blog_author'>by Virgie Patterson 12 hours ago</p>
                                <p className='blog_title'>The Reality of Diversity in the Workplace</p>
                                <p className='blog_desc'>My views of diversity are various and ever-changing—shaped by my experiences as a black woman, the companies…</p>
                                <button className='blog_button productivity_button'>Productivity</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <div className='blog_card' data-aos="fade-up" data-aos-duration="3000" >
                            <div style={{ position: 'relative' }}>
                                <img className="card-img" src={blog_img1} alt="blog_img1" />
                                {/* <img  src={sinleCircle} alt="blog_img" className='blog_card_circle'/> */}
                            </div>
                            <div className="card-body">
                                <p className='blog_author'>by John Doe 14 hours ago</p>
                                <p className='blog_title'>Announcing Our New Corporate Brand!</p>
                                <p className='blog_desc'>As we approach our first decade of tremendous accomplishments, we have a lot to be thankful for…</p>
                                <button className='blog_button technology_button'>Technology</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BlogPostComponents>
    )
}
export default BlogPost;