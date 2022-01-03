import React from "react";
import "./ChangeAlert.css";
import { useStorageListener } from "./useStorageListener";

const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Hubo cambios</p>
          <p>¿Desea recargar?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={() => {
              toggleShow(false);
            }}
          >
            Yes
          </button>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={() => {
              toggleShow(true);
            }}
          >
            do not update
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export { ChangeAlert };
