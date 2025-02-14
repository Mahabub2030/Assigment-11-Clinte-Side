import React from 'react';
import Banner from '../components/Banner';
import MainBanner from '../components/MainBanner';
import BookCategories from '../components/BookCategories';
import { Helmet } from 'react-helmet-async';
import Feature from '../components/Feature';
import WelcomeBox from '../components/WelcomeBox';
import PopularBooks from '../components/PopularBooks';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <MainBanner></MainBanner>
            <WelcomeBox></WelcomeBox>
            <BookCategories></BookCategories>
            <Banner></Banner>
            <Feature></Feature>
            <PopularBooks></PopularBooks>
        </div>
    );
};

export default Home;