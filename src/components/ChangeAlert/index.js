import React from 'react'; 
import './ChangeAlert.css'
import { useStorageListener } from './useStorageListener';

const ChangeAlert = ({ sincronize}) => {
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                <p>Hubo cambios</p>
                <button className="TodoForm-button TodoForm-button--add" onClick={()=>(toggleShow)}>
                    Recargar
            </button>
            </div></div>
        )
    }
    else {
        return <></>
    }
}

 
export {ChangeAlert}