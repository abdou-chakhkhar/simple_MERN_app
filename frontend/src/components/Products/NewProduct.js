import React, { useState } from 'react'
import Input from '../Input/Input';
import Button from '../Button/Button'
import './NewProduct.css'

const NewProduct = ({onAddProduct}) => {


  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredPrice, setEnteredPrice] = useState('')

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value)
  }

  const priceChangeHandler = e => {
    setEnteredPrice(e.target.value)
  }

  const submitProductHandler = e  => {
    e.preventDefault();
    onAddProduct(enteredTitle, enteredPrice)
    
  }


  return (
    <section id="new-product">
      <h2>Add a New Product</h2>
      <form onSubmit={submitProductHandler}>
        <Input
          type="text"
          label="Title"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
         />
         <Input
          type="number"
          label="Price"
          step={0.01}
          id="price"
          value={enteredPrice}
          onChange={priceChangeHandler}
         />
         <Button type="submit">Add product</Button>
      </form>

    </section>
  )
}


export default NewProduct;

