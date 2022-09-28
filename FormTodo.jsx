import React from 'react'
import {useState} from 'react'

const FormTodo = props => {
  const {handleAddItem} = props
  // logica
  const [description, setDescription] = useState('');
  // crearTarea
  const crearTarea = e => {
    setDescription(e.target.value);
  }
  // validacion
const validacion = e =>{
  e.preventDefault()
  if (description !== "") {
    handleAddItem({
  done:false,
  id:(+new Date()).toString(),
  description
});
  setDescription('')
  console.log(handleAddItem);
  } 
}

  // jsx
  return (
    <form  onSubmit={validacion}>
      <input  onChange={crearTarea} value={description} ></input>
      <button className='button' >Add</button>
    </form>
  )
}

export default FormTodo