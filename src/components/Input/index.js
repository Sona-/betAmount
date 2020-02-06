import React from 'react';
import PropTypes from 'prop-types';
import dollarIcon from '../../images/dolarIcon.png';
import { isNaN } from 'lodash';
import './index.scss';

class Input extends React.Component {
    state = {
        value: ''
    }
    handelOnChange = ({ target: { value } }) => {
        this.setState({ value })
    }

    getDividedValue = () => {
        let { value } = this.state;
        if (isNaN(parseInt(value))) {
            return;
        }
        this.setState({ value: value / 2 })
    }

    getMultipleValue = () => {
        let { value } = this.state;
        if (isNaN(parseInt(value))) {
            return;
        }
        this.setState({ value: value * 2 })
    }

    render() {
        let { value } = this.state;
        let { label, id } = this.props;

        return <div className="input-container">
            <div className="form-group ">
                <img src={dollarIcon} alt=""></img>
                <input
                    type="input"
                    className="form-field"
                    placeholder="Bet Amount"
                    value={value}
                    onChange={this.handelOnChange}
                    id={id}
                    name={id} />
                <label htmlFor={id} className="form-label">{label}</label>
            </div>
            <button className="blu-btn" onClick={this.getDividedValue}>1/2</button>
            <button className="blu-btn" onClick={this.getMultipleValue}>x2</button>

        </div>

    }

};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
};

Input.defaultProps = {
    id: null,
    label: null,
};

export default Input;
