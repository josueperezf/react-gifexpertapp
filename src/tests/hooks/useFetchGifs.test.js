import { useFetchGifs } from "../../hooks/useFetchGifs"
// se uso npm install --save-dev @testing-library/react-hooks
import { renderHook } from '@testing-library/react-hooks'

describe('pruebas en el hook useFetchGifs', ()=>{
    // el estado inicial es que no haga llamada al servidor y no tenga imagenes
    // en este hook no se puede hacer expect(wrapper).toMatchSnapshot(); por que no hay html para imprimir pantalla por asi decirlo
    test('debe de retornar el estado inicial', async () => {
        // renderHook() crea un componente virtual y alli va a colocar el hook que nosotros creamos
        const {result, waitForNextUpdate } = renderHook(()=>useFetchGifs('goku'));
        const {data:imagenes, loading} = result.current;
        // console.log(imagenes, loading);

        // la siguiente linea se pone para que espere antes de hacer las pruebas expect()
        await waitForNextUpdate();
        expect(imagenes).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de reglo de imagenes y el loading en false', async () => {
        // waitForNextUpdate retorna una promesa que informa cuando ocurrio un cambio en el estado de nuestro hook que estamos probando
        const {result, waitForNextUpdate } = renderHook(()=>useFetchGifs('goku'));
        await waitForNextUpdate();
        const {data:imagenes, loading} = result.current;
        // el 10 es por que dijimos al api que de cada peticion nos traiga solo 10 elementos
        expect(imagenes.length).toEqual(10);
        // false es porque despues de traer la data debe de cambiar de estado de true a false
        expect(loading).toBe(false);
    })
    
    
})