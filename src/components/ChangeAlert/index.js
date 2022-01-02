import React from 'react';
import { WithStorageListener } from './withStorageListener';
import './ChangeAlert.css'
const ChangeAlert = ({ show, toggleShow }) => {
    
    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                <p>Hubo cambios</p>
                <button className="TodoForm-button TodoForm-button--add" onClick={()=>(toggleShow(false))}>
                    Recargar
            </button>
            </div></div>
        )
    }
    else{return <></>}
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)
export {ChangeAlertWithStorageListener}