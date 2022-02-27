import React from 'react'
import Navbar from '../Components/Navbar';
import GetInTouch from '../Components/Home/GetInTouch';
import Footer from '../Components/Footer';
import AgileSoftwareTeams from '../Components/Teams/AgileSoftwareTeams';
import TechnologiesList from '../Components/Teams/TechnologiesList';
import UiuxPost from '../Components/Teams/UxuiPost';

function Teams() {
    return (
        <>
            <Navbar />
            <AgileSoftwareTeams />
            <TechnologiesList />
            <UiuxPost />
            <GetInTouch />
            <Footer />
        </>
    )
}
export default Teams;