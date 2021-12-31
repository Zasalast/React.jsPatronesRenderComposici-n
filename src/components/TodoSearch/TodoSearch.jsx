import React from 'react'
/* import { TodoContext } from '../../context/todoContext' */
import './TodoSearch.css'
  
function TodoSearch({ searchValue, setSearchValue,loading }) {
 /*  const { searchValue, setSearchValue } = React.useContext(TodoContext) */

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }
    return (
        <div>
        <input disabled={loading} className="TodoSearch" placeholder='search To Do'
          value={searchValue}
        onChange={onSearchValueChange}/>
        {(searchValue?.length !==0)? <> <h3>Se encontraron  Todos con la palabras</h3> { searchValue}</>:<>All Todos</>}
      </div>
      

    )
}

export   {TodoSearch}
