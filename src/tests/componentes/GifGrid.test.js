import { shallow } from "enzyme";
import GifGrid from "../../componentes/GifGrid";

// 
import { useFetchGifs } from "../../hooks/useFetchGifs";
// jest.mock sirve para simular que mi hook useFetchGifs ya obtuvo la data del servidor
/**
 * es donde se guardan los datos sobre cómo se llamó a la función y qué función devolvió. La .mockpropiedad también rastrea el valor de thispara cada llamada, por lo que también es posible inspeccionar esto:
*/

jest.mock('../../hooks/useFetchGifs');

describe('pruebas del componente GifGrid.js',()=>{
    const categoria = 'goku';
    const gifs = [{
        "id": "oxbNORcXx76F2",
        "title": "opm GIF",
        "url": "https://media0.giphy.com/media/oxbNORcXx76F2/giphy.gif?cid=ed0298b533ss8ce6vzekx98hbb4mlh4k8pvhahiumjlgdlje&rid=giphy.gif"
    }];

    useFetchGifs.mockReturnValue({
        data: [],
        loading: true,
    });
    const wrapper = shallow(<GifGrid categoria={categoria} />);
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes', () => {
        // hacer que mi componente crea q ya tiene la informacion
        // useFetchGifs
        // la siguiente linea es para emular como si el useFetchGifs ya fue a la api y trajo imagenes, con el mockReturnValue simulo la data que deberia retornar el backend
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid categoria={categoria} />);
        expect(wrapper).toMatchSnapshot();
        // como el parrafo solo se muestra si no tiene data, entonces pregunto si existe en el html la etiqueta p, si retorna false, estamos bien
        expect(wrapper.find('p').exists()).toBe(false);
        // evaluamos si se esta dibujando en el html la etiqueta GifGridItem, decimos que la cantidad de equitas que se dibujan debe ser igual al numero de elementos que tiene el array gifs
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length);
        
    });
    
    
});