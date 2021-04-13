import {mount, shallow} from 'enzyme';
import ArticleComponent from '../components/ArticleComponent';
import toJson from 'enzyme-to-json';

describe('ArticleComponent test', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<ArticleComponent title="prim"></ArticleComponent>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    it('should render title', () => {
        const wrapper = shallow(<ArticleComponent title="ceva"></ArticleComponent>);
        expect(wrapper.find(".articleTitle").text()).toBe("ceva");
    })
    it('should mount ArticleComponent', async () => {
        const wrapper = await mount(<ArticleComponent title="ceva"/>)
        expect(wrapper.find(".articleTitle").text()).toBe("ceva")
    })
})