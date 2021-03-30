import { Fragment, useState } from "react";
import { AgregarCategoria } from "./componentes/AgregarCategoria";
import GifGrid from "./componentes/GifGrid";
import 'animate.css'
const GifExpertApp = ()=>{
    const [categorias, setcategorias] = useState (['One Punch']);

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AgregarCategoria setcategorias={setcategorias} />
            <hr/>
            
            <ol>
                {
                    categorias.map((categoria) => <GifGrid key={categoria} categoria={categoria}  /> )
                }
            </ol>

        </Fragment>
    );
}

export default GifExpertApp;