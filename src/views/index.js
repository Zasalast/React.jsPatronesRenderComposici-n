import React from 'react';
  

  import './../components/Modal/index.css'
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import {useTodos} from '../hooks/useTodos';
import {TodoSearch} from '../components/TodoSearch/TodoSearch';
import {TodoList} from '../components/TodoList/TodoList';
import {CreateTodoButton} from '../components/CreateTodoButton/CreateTodoButton';
import {TodoItem} from '../components/TodoItem/TodoItem';
import {Modal} from './../components/Modal/index'
import { TodoForm } from '../components/TodoForm';
import { Header } from './../components/Header/Header'
import {  TodosEmpty } from './../components/TodoEmpty/TodoEmpty'
import { TodosError } from './../components/TodosError/TodosError'
import { TodosLoading} from './../components/TodosLoading/TodosLoading'
 import { SearchValuesTodos} from './../components/SearchValuesTodos/SearchValuesTodos'
import { ChangeAlertWithStorageListener } from '../components/ChangeAlert';
 
function App() {
  const {
          error,
          loading,
          searchTodos,
          completeTodo,
    deleteTodo,totaltodos,completedTodos,
    openModal,setOpenModal,
      unchecktodo,searchValue, setSearchValue,addTodo,sincronizeTodos
        }=useTodos() ;
 return (
    <React.Fragment>
      <Header   loading={loading}>
         <TodoCounter completedTodos={ completedTodos} totaltodos={totaltodos} />
         <TodoSearch   searchValue={searchValue} setSearchValue={setSearchValue} />    
       </Header>
     <   TodoList
       error={error}
        searchValue={searchValue}
       loading={loading}
       totaltodos={totaltodos}
       searchTodos={searchTodos}
       onError={() =>  <TodosError /> }
       onLoading={() => <TodosLoading />}
       onEmptyTodos={() => <TodosEmpty  />}
       onSearchValuesTodos={(searchValue,searchTodos) => <SearchValuesTodos searchTodos={searchTodos} searchValue={searchValue}/>}
       render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.text)}
            unchecktodo ={() => unchecktodo(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}
               />
            )}
     />
      {/*     <TodoList>
        {
          error && <p>desesperate, ocurrio un error...</p>
        }
        {
          loading && <p><ContentLoader
             rtl
      speed={2}
         width={"100%"}
    height={160}
    viewBox="0 0 100% 160"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
     
    >  
     <rect x="0" y="0"   width="100%" height="38" />
      <rect x="0" y="40"   width="100%" height="38" />
       
      <rect x="0" y="80"   width="100%" height="38" />
      <rect x="0" y="120"   width="100%" height="38" />
    </ContentLoader></p>
        }
        {
          (!loading && !searchTodos.length) && <p>Crea tu primera tarea</p>
        }
        {searchTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.text)}
            unchecktodo ={() => unchecktodo(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}
               />
            ))}
             </TodoList> */}
      {openModal && <Modal setOpenModal={setOpenModal}><div>
  
        <TodoForm addTodo={ addTodo} setOpenModal={setOpenModal }/>
      </div>
     
    </Modal>}
     <ChangeAlertWithStorageListener
     sincronize={sincronizeTodos}
     />
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
