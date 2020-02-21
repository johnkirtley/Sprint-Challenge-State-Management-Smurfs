import React from "react";
import { getData } from '../actions'
import { connect } from 'react-redux';
import Form from './Form'
import "./App.css";


const App = (props) => {
  return (
    <div className="App">
      <Form />
      <button onClick={() => props.getData()}>Get Data</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    data: [...state.data]
  }
}



export default connect(mapStateToProps, { getData })(App);
