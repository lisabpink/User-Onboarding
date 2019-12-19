import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import OnBoardForm from "./Form"
import { Formik, Form, Field,ErrorMessage } from 'formik';

const validate =({name, age})=>{
  const errors ={};
  //validating name
  if (!name) {
    errors.name = "You need a name!"
  } else if(name.length < 2){
  errors.name = "You need a longer name!"
 }
//validating age
if (!age){
  errors.age = "You need an age!"
} else if (age < 18){
  errors.age = "You need to be older!"
}
return errors;
}


function App() {
  return (

    <Formik
        onSubmit={(values,tools)=>{

        }}
        validate={validate}
        initialValues={{ name: "", age: ""}}
        render={props=>{
          return(
            <Form>
                <Field name="name" type="text" placeholder="enter name" />
                <ErrorMessage  name="name" component="div" className="red"/>

                <Field name="email" type="text" placeholder="enter email" />
                <ErrorMessage  name="email" component="div" className="red"/>

                <Field name="password" type="text" placeholder="enter password" />
                <ErrorMessage  name="password" component="div" className="red"/>

                <input type="submit" />
            </Form>
          );
        }}
        />
  );
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);








    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  

export default App;
