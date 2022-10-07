import React from "react";


export default function Form (props) {
    const {values,
            onInputChange,
            onCheckboxChange,
            onSubmit,
            errors
            } = props;

    return (
        <div>
            <form id='pizza-form'>
                <h2>Build Your Own Pizza</h2>
                <h4>Name:</h4>
                <input 
                id='name-input'
                name='text'
                />
                <h4>Pizza Size</h4>
                <label>
                    <select id='size-dropdown'>
                        <option value=''>--- Select Pizza Size ---</option>
                        <option value='small'>8-inch (Small)</option>
                        <option value='medium'>12-inch (Medium)</option>
                        <option value='large'> 16-inch (Large)</option>
                    </select>
                </label>
                <h4>Your Choice of Toppings</h4>
                <label>
                    Pepperoni
                    <input 
                        name='pepperoni'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values}
                    />
                </label>
                <label>
                    Sausage
                    <input
                    name='sausage'
                    type='checkbox'
                    onChange={onCheckboxChange}
                    checked={values}
                    />
                </label>
                <label>
                    Onion
                    <input 
                        name='onion'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values}
                    />
                </label>
                <label>
                    Mushrooms
                        <input 
                        name='mushroom'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values}
                        />
                </label>
                <h4>Special Insturctions</h4>
                <input id='special-text' 
                    name='insturctions'
                    type='text'
                    value={values}
                    onChange={onInputChange}
                />
                <div className='order-btn'>
                    <button id='order-button'>Add Pizza</button>
                </div>
                <div className='err'>
                    <div>{errors}</div>
                </div>




            </form>
        </div>
    );
}