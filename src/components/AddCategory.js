import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories, categories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();
        inputValue.trim().length > 2 &&
        setCategories([ inputValue, ...categories ]);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
            <button>Agregar</button>
        </form>
    )
}

AddCategory.propTypes = {
    //categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    setCategories: PropTypes.func.isRequired
}

export default AddCategory



