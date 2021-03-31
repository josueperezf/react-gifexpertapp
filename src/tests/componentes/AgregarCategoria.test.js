import { shallow } from "enzyme";
import { AgregarCategoria } from "../../componentes/AgregarCategoria";

describe('Pruebas en el componente <AgregarCategoria/>',()=>{

    //const setcategorias = ()=>{};
    const setcategorias = jest.fn();
    let wrapper =  shallow(<AgregarCategoria setcategorias={setcategorias} />);

    beforeEach(()=>{
        // aqui coloco todo lo que quiero que se reinicialice
        jest.clearAllMocks();
        wrapper =  shallow(<AgregarCategoria setcategorias={setcategorias} />);
    });

    test('debe mostrarse correctamente', () => {
        // la siguiente linea es para que haga el Snapshot del html del componente
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de cambiar la caja de texto', () => {
        const input =  wrapper.find('input');
        const value = 'hola a todos';
        // en la siguiente linea, el evento change, pasa un evento, para hacerlo, le pasamos un objeto vacio
        // el target value, es por que el componente hace esto, setinputValue(event.target.value); con las llaves le mandamos el event, pero necesita el objeto target y la propiedad value
        input.simulate('change',{target:{value}});
    });

    test('NO debe postear la informacion submit', () => {
        // verifica si realmente NO esta enviado data cuando ejecuta el submit y el input no tiene informacion
        // coloco la siguiente linea ya que como en el pasado test se paso data 
        // const wrapper =  shallow(<AgregarCategoria setcategorias={setcategorias} />);
        // el submit emite un evento, para simularlo se pasa un objeto, como el componente que evaluamos tenemos q usaremos el llamado a la funcion preventDefault, entonces hay q enviarla para que no arroje error
        wrapper.find('form').simulate('submit',{ preventDefault: ()=>{} });
        // la siguiente linea usa el setcategorias que es similiar al useState del componente
        // .not es una negacion
        //  toHaveBeenCalled para saber si fue llamado
        // pregunta si el metodo setcategorias no fue llamado
        expect(setcategorias).not.toHaveBeenCalled();
    });
    
    test('debe de llamar al setcategorias y limpiar la caja de texto', () => {
        // simular inputChange
        // simular el submit
        // setcategorias se debe haber llamado
        // el valor del input debe estar como string vacio ''
        wrapper.find('input').simulate('change',{ target:{value:'valor de prueba'}});
        // const valorAsignado = wrapper.find('input').prop('value');
        wrapper.find('form').simulate('submit',{preventDefault:()=>{}});
        // preguntar si la funcion setcategorias fue llamada una vez
        expect(setcategorias).toHaveBeenCalled();
        // la siguiente seccion es para saber si setcategorias fue llamado mediante una funcion javascript
        expect(setcategorias).toHaveBeenCalledWith(expect.any(Function));

        expect('').toBe(wrapper.find('input').prop('value'));
    })
    
});