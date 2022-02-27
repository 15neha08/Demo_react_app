import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import TechnologiesListPage from '../Components/TechnologiesListPage'

function TechnologiesListPages() {
    return (
        <>
            <Navbar />
           <TechnologiesListPage />
            <Footer />
        </>
    )
}
export default TechnologiesListPages;