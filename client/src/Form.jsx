import {useState} from "react";

import "./Form.css";

const Form = () => {
    return <form> 
    <div className= 'form-group'>
        <input
    type = 'text'
    placeholder = ''
    required 
    />
    </div>
    <input type= 'submit' />
    <p className="subitted-text"></p>
    </form>;
};
export default Form;