import React from 'react';
import { isNil } from 'lodash';
import './index.scss';

class BarSlider extends React.Component {
    state = {
        tooltip: {},
        greenBarHeight: 0,
    }

    onMouseLeave = () => {
        this.setState({ tooltip: {}, greenBarHeight:0 });
    }

    handelOnMouseMove = (e) => {
        const extraMarginLeft = 25;
        const extraMarginTop = 12;
        const extraPixel = 1;

        let boundingClient = this.slideBar.getBoundingClientRect();
        let height = boundingClient.height;
        let top = boundingClient.top;

        let percentage = (100 - ((e.pageY - top) * 100) / height);

        this.setState({
            tooltip: {
                top: e.pageY - extraMarginTop,
                left: e.pageX + extraMarginLeft,
                percentage: Math.floor(percentage)
            },
            greenBarHeight: e.pageY - top + extraPixel,
        })

    }

    getTooltip = () => {
        let { tooltip: { top, left, percentage, } } = this.state;
        if (isNil(percentage)) {
            return null;
        }
        return <div className="tooltip" style={{ top, left }}>{percentage}</div>

    }

    render() {
        let { greenBarHeight } = this.state;

        return <React.Fragment>
            <div className="slide-bar-container">
                <div className="range-bar">
                    <span>100</span>
                    <span className="bottom-range">0</span>
                </div>

                <div className='slide-bar'
                    ref={(node) => this.slideBar = node}
                    onMouseMove={this.handelOnMouseMove}
                    onMouseLeave={this.onMouseLeave}
                >
                    <div className="green" style={{ height: greenBarHeight }} />

                </div>
            </div>
            {this.getTooltip()}
        </React.Fragment >
    }

};


export default BarSlider;
