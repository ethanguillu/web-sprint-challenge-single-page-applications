import React from "react";


export default function Form (props) {


    return (
        <div>
            <form id='pizza-form'>
                <h2>Build Your Own Pizza</h2>
                <h4>Name:</h4>
                <input 
                id='name-input'
                name='text'
                />

                <label>Size
                    <select>
                        
                    </select>
                </label>
            </form>
        </div>
    );
}