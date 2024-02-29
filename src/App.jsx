
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CameraCapture from './components/CameraCapture';
import OcrProcessor from './components/OcrProcessor';

const App = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={CameraCapture} />
    //     <Route path="/process" component={OcrProcessor} />
    //   </Switch>
    // </Router>
    <>
    <h2 style={{textAlign: "center"}}>Optical Character Reader</h2>
    <h4 style={{textAlign: "center"}}>Choose file from below button and process image to get the recognized text</h4>
    <CameraCapture />
    </>
  );
};

export default App;