import React from 'react';

let AppContext = React.createContext();

let initialState = {
  auth: {}
};

let reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "login":
      return {
        ...state,
        auth: action.parameters
      };
    case "logout":
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
export {AppContext, AppContextConsumer, AppContextProvider};
