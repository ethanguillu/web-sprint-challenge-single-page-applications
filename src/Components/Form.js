import React from 'react'

export default function Form(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        errors
    } = props

    return (
        <div className="formContainer">
            <form className="pizzaForm" onSubmit={onSubmit} id="pizza-form">
                <h2>Build Your own Pizza</h2>
                <h4>Name:</h4>
                <label htmlFor="name">
                <input id="name-input"
                name="name"
                type="text"
                value={values.name}
                onChange={onInputChange}
                />
                </label>
                <h4>What size?</h4>
                <label htmlFor="size">
                <select onChange={onInputChange} value={values.size} name="size" id="size-dropdown">
                    <option value="">--Select Pizza Size--</option>
                    <option value="pp">Personal Pan (4 inch)</option>
                    <option value="small">Small (8-inch)</option>
                    <option value="med">Medium (12-inch)</option>
                    <option value="large">Large (16 inch)</option>
                </select>
                </label>
                <h4>Choose your toppings (no extra cost!)</h4>
                <label htmlFor="toppings">
                    Pepperoni
                    <input
                    name="pepperoni"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.pepperoni}
                    />
                </label>
                <label  htmlFor="toppings">
                    Onions
                    <input
                    name="onions"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.onions}
                    />
                 </label>
                 <label  htmlFor="toppings">
                    Chicken
                    <input
                    name="chicken"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.chicken}
                    />
                 </label>
                 <label  htmlFor="toppings">
                    peppers
                    <input
                    name="peppers"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.peppers}
                    />
                 </label>
                 <label  htmlFor="toppings">
                    Pineapple
                    <input
                    name="pineapple"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.pineapple}
                    />
                 </label>
                 <label htmlFor="toppings">
                     Extra Cheese
                    <input
                    name="extraCheese"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.extraCheese}
                    />
                 </label>
                 <label htmlFor="instructions" >
                     Special instructions?
                     <textarea
                     id="special-text"
                     name="instructions" 
                     value={values.instructions} 
                     onChange={onInputChange} 
                     />
                 </label>
                 <div className="orderBtn">
                     <button id="order-button">Add to Order</button>
                 </div>
                 <div className="err">
                     <div>{errors.name}</div>
                 </div>
            </form>
        </div>
    )
}