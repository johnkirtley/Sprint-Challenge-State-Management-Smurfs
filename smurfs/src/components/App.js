import React from "react";
import { getData } from '../actions'
import { connect } from 'react-redux';
import Form from './Form'
import Smurfs from './Smurfs'
import "./App.css";


const App = (props) => {
  return (
    <div className="App">
      <Form />
      <button onClick={() => props.getData()}>Get Data</button>
      <Smurfs />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    data: [...state.data]
  }
}


export default connect(mapStateToProps, { getData })(App);
