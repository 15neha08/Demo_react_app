import React from 'react';
import Navbar from '../Components/Navbar';
import GetInTouch from '../Components/Home/GetInTouch';
import Footer from '../Components/Footer';
import CreativePartner from '../Components/Branding/CreativePartner';
import UxuiServicees from '../Components/Branding/UiUxService';
import UxDesignMethods from '../Components/Branding/UxDesignMethods';
import GotoTools from '../Components/Branding/GotoTools';

function BrandingPage() {
    return (
        <>
            <Navbar />
            <CreativePartner />
            <UxuiServicees />
            <UxDesignMethods />
            <GotoTools />
            <GetInTouch />
            <UxDesignMethods />
            <Footer />
        </>
    )
}
export default BrandingPage;