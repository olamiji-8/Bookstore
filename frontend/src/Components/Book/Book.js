import { Button } from '@mui/material';
import React from 'react'

const Book = (props) => {
  const {_id, name, authour, description, price, image} = props.book;
  return (
    <div>
      <img src={image} alt={name}/>
      <article>By {authour}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>${price}</h2>
      <Button>Update</Button>
      <Button>Delete</Button>
       </div>
  )
}

export default Book