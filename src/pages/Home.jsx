import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

export default function Home() {
    return (

        <div className="container">
            <div className="center">
                <h4 className="subtitle">The Evolution of Sound Across the Ages</h4>
                <h1 className='title'>Ugly Melusine</h1>
                <p className='description'>
                    Discover the story of music, from the solemn chants of the medieval era to the diverse sounds of today. Explore how centuries of creativity, culture, and innovation have shaped the music we know and love.
                </p>
                <button className='btn-main'>
                    Explore More
                </button>
            </div>

            <footer className="footer">
                <span>I&nbsp;II&nbsp;III&nbsp;IV&nbsp;V&nbsp;VI&nbsp;VII&nbsp;VIII&nbsp;IX&nbsp;X&nbsp;XI&nbsp;XII</span>
            </footer>

        </div>
    )
}