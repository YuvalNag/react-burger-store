import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({ adapter: new Adapter() })

describe("<NavigationItems/>", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render 2 <NavigationItem/> if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it('should render login <NavigationItem/> if not authenticated', () => {
        expect(wrapper.contains(<NavigationItem link='/auth'>Login</NavigationItem>)).toEqual(true);
    });

    it('should render 3 <NavigationItem/> if authenticated', () => {
        wrapper.setProps({ isAuth: true });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
    it('should render logout <NavigationItem/> if authenticated', () => {
        wrapper.setProps({ isAuth: true });
        expect(wrapper.contains(<NavigationItem key='logout' link='/' exact ><div > Logout</div></NavigationItem>)).toEqual(true);
    });
})