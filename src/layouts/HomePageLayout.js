import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePageLayout = props => {
    return (
        <div class="fullHeight">
            <Header />

            {props.children}

            <Footer />
        </div>
    );
};

export default HomePageLayout;