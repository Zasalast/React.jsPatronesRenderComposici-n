import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
/*  import { TodoContext} from '../../context/todoContext' */
const Modal = ({ children,setOpenModal }) => {
  /* const {  setOpenModal}=React.useContext *//* (TodoContext) */
    const onClickButton = () => {
      console.log("modal onclick")
        setOpenModal(prevState=>!prevState) 
    }
  return ReactDOM.createPortal( 
    <div className='modal'>
       <div className="modal-content">        
        <button className="close" onClick={()=>onClickButton()}>&times;</button>
  {children}
  </div></div> ,
  document.getElementById('modal')
);
 
}
export {Modal}