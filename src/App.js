import React, { Component } from "react";
import { getPatients } from "./services";
import "./App.css";
import Questionnaire from "./components/Questionnaire";

class App extends Component {
  componentDidMount() {
    getPatients().then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <div className="App">
        <Questionnaire />
      </div>
    );
  }
}

export default App;
