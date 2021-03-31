import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types'

const GifGrid = ({categoria}) => {
    const {data:imagenes, loading} = useFetchGifs(categoria);
    /*
    // el siguiente hook hace evaita que cada vez que se realice un cambio en el html realice la llamada http
    useEffect (() => {
        getGifs(categoria).then((imgs)=>{
            setimages(imgs);
        });
    },[categoria])
    */
    // en la anterior linea, [categoria] se puede quitar, pero fernando la coloca y dice que es para que si en algun momento cambia el valor de la categoria, entonces todo lo que esta dentro de 'useEffect' se ejecutaria nuevamente
    
    return (
        <>
        <h3 className=" animate__animated animate__fadeIn">{categoria}</h3>
        {/** la siguiente linea es como un operador ternario, pero como no quiere evaluar el de lo contrario, se unsa el && */}
        { loading && <p className="animate__animated animate__flash" > Cargando</p> }
        <div className="card-grid">
            { /**  
             * en la seccion GifGridItem se le va a enviar el img, pero fernando hacer una destructuracion {...img}
             * con ello logra que GifGridItem no reciba asi ({img}), sino directamente ({id, title, utl})
            */}
                {
                    
                    imagenes.map(img=>{
                        return <GifGridItem key={img.id}  {...img} />
                    })
                    
                }
        </div>
        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}

export default GifGrid
