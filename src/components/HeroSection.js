import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>SOFTWARE TECHNOLOGIES</h1>
            <p>Let's Learn Something Different</p>
            <div className='hero-btns'>
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Get Start With Innovative.
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
