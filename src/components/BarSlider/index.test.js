import React from 'react';
import { shallow } from 'enzyme';
import BarSlider from './index';

describe('<BarSlider/>', () => {

  it('<BarSlider/> test rendering', () => {
    const wrapper = shallow(<BarSlider />);

    expect(wrapper).toBeTruthy();
  });

  it('<BarSlider/> test get tooltip', () => {
    const wrapper = shallow(<BarSlider />);
    const instance = wrapper.instance();

    instance.setState({ tooltip: { percentage: null } });

    expect(instance.getTooltip()).toBeFalsy();

    instance.setState({ tooltip: { top: 45, left: 45, percentage: 3 } });

    expect(instance.getTooltip()).toBeTruthy();
  });


  it('<BarSlider/> test handelOnMouseMove', () => {
    const wrapper = shallow(<BarSlider />);
    const instance = wrapper.instance();
    const mockElem = {
      pageY: 23,
      pageX: 45,
    };

    const expectedMockedData = {
      greenBarHeight: -16,
      tooltip: { left: 70, percentage: 105, top: 11 },
    }

    instance.slideBar = {
      getBoundingClientRect: () => ({
        height: 300,
        top: 40,
      })
    }

    instance.handelOnMouseMove(mockElem);

    expect(instance.state).toEqual(expectedMockedData);

  });

});
