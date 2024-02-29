
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
    <CameraCapture />
    </>
  );
};

export default App;