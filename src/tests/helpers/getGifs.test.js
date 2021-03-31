import { getGifs } from "../../helpers/getGifs";

describe('pruebas con el helper getGifs Fetch',()=>{

   test('debe de traer a 10 elementos', async () => {
       const gifs = await getGifs('goku');
       expect(gifs.length).toBe(10);
   })
    
   test('que pasa cuando no envio categoria', async () => {
    const gifs = await getGifs('');
    // sino envio categoria debe retornar un array vacio []
    expect(gifs.length).toBe(0);
})
});