import { UseRequest, UserError, UserSuc } from "../action/userAction";

export  const getUser = () => {
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch(UseRequest());
      // Return promise with success and failure actions
      return fetch('https://jsonplaceholder.typicode.com/users')
      .then(y=>y.json()).then(  
        user => dispatch(UserSuc(user)),
        err => dispatch(UserError(err))
      );
    };
  };