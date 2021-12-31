import React from 'react';

function SearchValuesTodos({ searchValue,searchTodos })  {
    return <> {(searchTodos?.length===0)?<p>No se encontro to dos, que contengan la palabra...  {console.log(searchValue,'o')}</p>:<p>resultados:{searchValue}   </p>}</>;
}

export { SearchValuesTodos };