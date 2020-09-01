import React from 'react'
const Form = ({setTopic}) => {

    const handleInput = e =>{
        e.preventDefault()
        setTopic(e.target.value)
    }    
    return ( 
        <div className="form-container">
            <input 
                type="text"
                placeholder='Find something'
                onChange={handleInput}
            />
            <span></span>
        </div>
     );
}
 
export default Form;