import React from 'react'

const Checkbox = props => {
// logica
const {onChange, data:{id,description,done}} = props;


// jsx
  return (
    <>
    <label className="todo new-item">
      <input 
      className='todo__state'
      onChange={onChange} 
      type="checkbox" 
      name={id}
      defaultChecked={done} />
    <div className='todo__text'>{description}</div>
   </label>
    </>

  )
}

export default Checkbox