import React from 'react';
import { WithStorageListener } from './withStorageListener';

const ChangeAlert=({show,toggleShow})=>{
    if(show){return <div><p>Hubo cambios</p><button type="" onClick={()=>toggleShow(false)}>recargar</button></div>}
    else{return <></>}
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)
export {ChangeAlertWithStorageListener}