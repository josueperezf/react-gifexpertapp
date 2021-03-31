import { shallow } from "enzyme";
import GifGridItem from "../../componentes/GifGridItem";

describe('prueb para el componente <GifGridItem/>',()=>{
    const img = {
        "id": "oxbNORcXx76F2",
        "title": "opm GIF",
        "url": "https://media0.giphy.com/media/oxbNORcXx76F2/giphy.gif?cid=ed0298b533ss8ce6vzekx98hbb4mlh4k8pvhahiumjlgdlje&rid=giphy.gif"
    };
    const wrapper = shallow(<GifGridItem  key={img.id}  {...img} />);

    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de tener un parrafo con el title', () => {
        const etiquetaP = wrapper.find('p').text().trim();
        expect(img.title).toBe(etiquetaP);
    });
    
    test('la imagen del componente debe tener la url y el alt que el envio', () => {
        const etiquetaImg = wrapper.find('img');
        // props sirve para obtener TODAS las propiedades de una etiqueta html
        // prop sirve para obtener UNA propiedad de una etiqueta html
        const altImg = etiquetaImg.prop('alt');
        const srcImg = etiquetaImg.prop('src');
        expect(img.title).toBe(altImg);
        expect(img.url).toBe(srcImg);
    });
    
    test('el div debe contener la clase animate__fadeIn', () => {
        const claseCssBuscar    = 'animate__fadeIn';
        const clasesEnDiv       = wrapper.find('div').prop('className');
        expect( clasesEnDiv.includes(claseCssBuscar)).toBe(true);
    });
    
});
