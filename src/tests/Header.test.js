import {shallow} from 'enzyme';
import Header from "../containers/Header";

describe('<Header/>', () => {
    it('should render div with headerContainer class', () => {
        const wrapper = shallow(<Header></Header>)
        expect(wrapper.find('.headerContainer')).toHaveLength(1);
    });
    it('should have Nav', () => {
        const wrapper = shallow(<Header/>)
        expect(wrapper.find('Nav')).toHaveLength(1);
    })
})