import React from 'react';

const WithStorageListener=(WrappedComponent)=>
{
return function WrappComponentWithStorageListener(props){
    const [storageChange, setStorageChange] = React.useState(false)
    const toggleShow = () => {
        props.sincronize();
        setStorageChange(false)
    }
    return (
    <WrappedComponent
    show={storageChange}
    toggleShow={toggleShow}
    />
    )
}
}

export {WithStorageListener}
