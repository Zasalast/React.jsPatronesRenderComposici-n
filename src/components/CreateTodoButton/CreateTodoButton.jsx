import React from 'react'
import "./CreateTodoButton.css"
import { useTodos} from '../../hooks/useTodos'
function CreateTodoButton({  setOpenModal}) {
 
    const onClickButton = () => {
     setOpenModal(prevState=>!prevState)     
    }
    return (       
         <button onClick={()=>onClickButton()} className='CreateTodoButton'>+</button>      
    )
}
export   {CreateTodoButton}
