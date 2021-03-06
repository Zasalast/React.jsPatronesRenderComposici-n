import React from 'react'
import './TodoList.css'
function TodoList({searchTodos,searchValue,error,children,loading,totaltodos,render,onError,onLoading,onEmptyTodos,onSearchValuesTodos}) {
   const renderFunction=children || render;
    return (
        <section className='TodoList-container'>
             { error &&  onError()}
       {  loading &&  onLoading()}

       {(! loading && searchTodos?.length) &&  onSearchValuesTodos( searchValue)}
       {(! loading && !searchTodos?.length) &&  onSearchValuesTodos( searchValue)}
    
            {(! loading &&  (totaltodos===0)) &&  onEmptyTodos()}
            {(!!  totaltodos && !searchTodos?.length) &&  onEmptyTodos()}
           {(! loading && ! error ) &&searchTodos.map( renderFunction)}
            
        </section>
    )
}

export   {TodoList}
