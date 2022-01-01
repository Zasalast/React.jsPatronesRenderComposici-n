import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './views/index'; */
import reportWebVitals from './reportWebVitals';
const App=(props)=>{
  return(<div>
    <h1>
      !{props.saludo}, {props.name}!
    </h1>
  </div>)
}

/* const withWhatever=(WrappedComponent)=>{
  return function TruthComponent(props){
    return (
      <>
      <WrappedComponent {...props}/>
    <p>Estamos acompañando a wrappedComponent</p>
      </>
    )
  }
} */
const withWhatever=(WrappedComponent)=>{
  return function 
  WrappedComponentWithSaludo(saludo){
  return function TruthComponent(props){
    return (
      <>
      <WrappedComponent {...props} saludo={saludo}/>
    <p>Estamos acompañando a wrappedComponent</p>
      </>
    )
  }}
}
const AppWithSaludo=withWhatever(App)("Buena noche")

ReactDOM.render(
  <React.StrictMode>
    <AppWithSaludo name="nata"  />
  {/*   <App name="nat" saludo="hola"/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
