import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import RemoteWork from '../Components/Home/RemoteWork';
import ChoosePath from '../Components/Home/ChoosePath';
import OurSolutions from '../Components/Home/OurSolutions';
import OurProduct from '../Components/Home/OurProduct';
import BlogPost from '../Components/Home/BlogPost';
import GetInTouch from '../Components/Home/GetInTouch';

function HomePage () {
    return(
        <div>
            <Navbar />
            <RemoteWork />
            <ChoosePath />
            <OurSolutions />
            <OurProduct  />
            <BlogPost />
            <GetInTouch />
            <Footer />
        </div>
    )
}
export default HomePage;