# proyecto de consumo de api de gifs


## bases para realizar pruebas con ENZYME mantenido por facebook

Enzyme es una utilidad de prueba de JavaScript para React que facilita la prueba de la salida de sus componentes de React. También puede manipular, atravesar y, de alguna manera, simular el tiempo de ejecución dado el resultado.
La API de Enzyme está destinada a ser intuitiva y flexible al imitar la API de jQuery para la manipulación y el recorrido de DOM.

recordemos que las pruebas se ejecutan con npm test, que si hacemos cambois al html debemos presionar 'u' MINUSCULA en la consola para que refresque el snaphsot, y que si queremos correr solo una prueba, debemos presionar la tecla w, luego la p, y escribir el nombre del archivo .test.js que queremos ejecutar

esta libreria es mejor cuando tenemos que probar componentes de react, con cosas como eventos click y demas, esta libreria facilita esas acciones <https://enzymejs.github.io/enzyme/> como para el momento de hacer esta practica la libreria no soporta react 17, entonces se debe usar <https://github.com/wojtekmaj/enzyme-adapter-react-17> que fue elaborada por las mismas personas, pero esta en fase alfa 
    
    npm i --save-dev enzyme 
    npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
    npm install --save-dev enzyme-to-json


luego de instalaciones debemos ir al archivo setupTests.js y agregamos

    import Enzyme from 'enzyme';
    import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
    import {createSerializer} from 'enzyme-to-json';
    
    Enzyme.configure({ adapter: new Adapter() });
    expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


las Pruebas se ejecutan de la misma manera, con npm run test, con la diferencia, es que este tipo de prueba genera una carpeta llamada _snapshots_ en nuestro proyecto, la cual almacena el html resultante luego de ejecutar nuestra prueba. si nota que hay algun cambio en el html que tiene alli en comparacion con el que acabamos de generar al correr la prueba, nos pedira que presionemos 'u' para actualizar el html que tiene guardado en esa carpeta PrimeraApp.test.js.snap cada vez que realicemos cambio en nuestros componentes, el enzyme nos va a pedir que presionemos 'u' para que refresquemos las fotografias que hace de nuestro html


## probar un custom hook

cuando usan hook no se tiene acceso al useState, por ende, de debe instalar *npm install --save-dev @testing-library/react-hooks*, <https://react-hooks-testing-library.com/>

### Cuándo usar esta biblioteca

1. Está escribiendo una biblioteca con uno o más hooks personalizados que no están directamente vinculados a un componente.
2. Tiene un hook complejo que es difícil de probar a través de interacciones de componentes.

### Cuando no usar esta biblioteca
1. Su hook se define junto con un componente y solo se usa allí
2. Su hook es fácil de probar simplemente probando los componentes usándolo