import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas en <GifExpertApp/>',()=>{

    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de mostrar una lista de categorias', () => {
        const categorias = ['One Punch', 'goku'];
        const wrapper = shallow(<GifExpertApp defaultCategoria={categorias} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    })
    
});