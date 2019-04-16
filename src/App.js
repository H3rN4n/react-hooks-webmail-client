import React, {useState} from 'react';
// import { createMuiTheme } from '@material-ui/core/styles'; import blue from
// '@material-ui/core/colors/blue';

import './App.css';

import AppLayout from './AppLayout';

// const theme = createMuiTheme({   palette: {     primary: blue,     secondary:
//  blue   }, });

const App = () => {

  const [state,
    setState] = useState({name: 'React Webmail Client', reactVersion: React.version})
  return (
    <div className="App">
      {state.name}
      on React v{state.reactVersion}
      <AppLayout/>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </div>
  );
}

export default App;
