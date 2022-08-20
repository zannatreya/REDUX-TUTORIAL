const { createStore } = require("redux");

// defining constants
// const INCREMENT = "INCREMENT";
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";
  const ADD_USER="ADD_USER";

// const ADD_USER="ADD_USER";

//state
const initialCounterState = {
    users: ["zannat"],
    count: 1,
};

// const initialUsersState = {
// users: [{name: "Zannatul Binta Bahar"}],
// };

// action - Object- type, payload
// const incrementCounter = () => {
//     return {
//       type: INCREMENT,
//     };
//   };
  
  // const decrementCounter = () => {
  //   return {
  //     type: DECREMENT,
  //   };
  // };
  // const resetCounter = () => {
  //   return {
  //     type: RESET,
  //   };
  // };
  // const incrementCounterByValue = (value) => {
  //   return {
  //     type: INCREMENT_BY_VALUE,
  //     payload: value,
  //   };
  // };

  const addUser =(user)=>{
    return {
      type: ADD_USER,
      payload:user,
    }
  }


// Reducer

// const counterReducer =(state=initialCounterState,action)=>{
// switch (action.type) {
//   case INCREMENT:
//     return{
//       ...state,
//       count: state.count+1,
//     }
//   case DECREMENT:
//     return{
//       ...state,
//       count: state.count-1,
//     }
//   case RESET:
//     return{
//       ...state,
//       count: 0,
//     }
//   case INCREMENT_BY_VALUE:
//     return{
//       ...state,
//       count: state.count + action.payload,
//     }

//   default:
//     state;
//   }
// };
const userReducer =(state=initialCounterState,action)=>{
switch (action.type) {
  
  case ADD_USER:
    return{
      users: [...state.users,action.payload],
      count: state.count + 1,
    }

  default:
    state;
  }
};

//create store

const store = createStore(userReducer);

store.subscribe(()=>{
  console.log(store.getState());
})

//dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounterByValue(10));
// store.dispatch(incrementCounterByValue(5));
store.dispatch(addUser("reya"));
store.dispatch(addUser("ibrar"));
