import React from 'react'
import Checkbox from './Checkbox'

const TaskList = props => {
  // logica
  const {list, setList} = props;
  
   const onChangeStatus = e => {
    const {name,checked} = e.target;
    const updateList = list.map(item=>({
      ...item,
      done:item.id === name? checked:item.done
      
    }));
    // console.log(list)
    setList(updateList)
   }
   const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList)
   };
  const chk =list.map(item =>
      <Checkbox key={item.id} data={item} onChange={onChangeStatus}/>
   );



  // jsx
  return (
    <div className='todo-list'>
      {list.length ? chk : 'No tasks'}
      {list.length ? (
         <p>
        <button onClick={onClickRemoveItem} className="button blue">
          Delete all done
        </button>
      </p>
      ):null}
    </div>
  )
}

export default TaskList