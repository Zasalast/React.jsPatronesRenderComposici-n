import React from 'react'
/* import { TodoContext } from '../../context/todoContext'; */
import './TodoCounter.css'
function TodoCounter({ completedTodos, totaltodos,loading }) {
   /*   const { completedTodos, totaltodos } = React.useContext(TodoContext) */
    return (
         
       <h1   className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Has completado {completedTodos} de {totaltodos} Todos</h1>
         
    )
}
export {TodoCounter};