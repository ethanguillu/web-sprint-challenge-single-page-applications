import React from "react";


export default function Form (props) {
    const {values,
            onCheckboxChange
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
            </form>
        </div>
    );
}