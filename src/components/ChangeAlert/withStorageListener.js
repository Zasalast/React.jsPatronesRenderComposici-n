import React from 'react';

const WithStorageListener=(WrappedComponent)=>
{
return function WrappComponentWithStorageListener(props){
 const [storageChange,setStorageChange]= React.useState(false)
 window.addEventListener('storage',(change)=>{
     if (change.key==='TODOS_V1') {
         console.log('hubo cambios en  TODOS_1',change)
         setStorageChange(true)
     } else {
        console.log('no hubo cambios en  TODOS_1')
     }
 })
    return (
    <WrappedComponent
    show={storageChange}
    toggleShow={setStorageChange}
    />
    )
}
}

export {WithStorageListener}
