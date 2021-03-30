import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AgregarCategoria = ({setcategorias}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (event)=>{
        setinputValue(event.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // const valor = e.target.elements[0].value;
        if(inputValue.trim().length > 0) {
            setcategorias((categorias)=>[inputValue, ...categorias]);
            setinputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value = {inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AgregarCategoria.propTypes = {
    setcategorias:PropTypes.func.isRequired
}