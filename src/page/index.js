import React from 'react';
import { BarSlider, Input, Table, SVGAnimation } from '../components';
import '../scss/reset.scss';
import './index.scss';


const Page = ({ ...props }) => {
    return (
        <div className="page-container">
            <div className="section">
                <div className="section-item">
                    <div className="slide-bar-item"> <BarSlider /></div>
                    <Input id="betAmount" label="Bet Amount" />
                </div>
                <div className="section-item">
                    <Table />
                </div>
                <div className="section-item svg-animation">
                    <SVGAnimation />
                </div>
            </div>
        </div>
    );
}

export default Page;