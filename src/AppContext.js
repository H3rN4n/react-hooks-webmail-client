import React from 'react';
import {navigate} from "@reach/router";

let AppContext = React.createContext();

let initialState = {
  auth: {}
};

const validateCredential = (state, action) => {
  navigate('/invoices/inbox');
  return {
    ...state,
    auth: action.parameters
  };
}

let reducer = async(state, action) => {
  switch (action.type) {
    case "login":
      return validateCredential(state, action);
    case "logout":
      navigate('/home');
      return {
        ...state,
        auth: {}
      };
    default:
      return state
  }
};

function AppContextProvider(props) {
  // [A]
  let [state,
    dispatch] = React.useReducer(reducer, initialState);
  let value = {
    state,
    dispatch
  };

  // [B]
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

// [C]
export {AppContext, AppContextProvider, AppContextConsumer};
