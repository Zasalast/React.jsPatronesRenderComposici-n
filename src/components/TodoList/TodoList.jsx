import React from 'react'
import './TodoList.css'
function TodoList(props) {
   
    return (
        <section>
             {props.error && props.onError()}
       { props.loading && props.onLoading()}
            {(!props.loading && !props.searchTodos?.length) && props.onSearchValuesTodos(props.searchValue)}
            {(!props.loading && !props.totaltodos) && props.onEmptyTodos( )}
           {props.searchTodos.map(props.render)}
            <ul>
              {props.children}
            </ul>
        </section>
    )
}

export   {TodoList}
