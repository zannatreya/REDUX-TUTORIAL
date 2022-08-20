const { createStore } = require("redux");

// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
// const ADD_USER="ADD_USER";

//state
const initialCounterState = {
    count: 0,
};

// const initialUsersState = {
// users: [{name: "Zannatul Binta Bahar"}],
// };

// action - Object- type, payload
const incrementCounter = () => {
    return {
      type: INCREMENT,
    };
  };
  
  const decrementCounter = () => {
    return {
      type: DECREMENT,
    };
  };
  const resetCounter = () => {
    return {
      type: RESET,
    };
  };

  // const AddUser =()=>{
  //   return {
  //     type: ADD_USER,
  //     payload:{name:"zannat"},
  //   }
  // }


// Reducer

const counterReducer =(state=initialCounterState,action)=>{
switch (action.type) {
  case INCREMENT:
    return{
      ...state,
      count: state.count+1,
    }
  case DECREMENT:
    return{
      ...state,
      count: state.count-1,
    }
  case RESET:
    return{
      ...state,
      count: 0,
    }

  default:
    state;
  }
};

//create store

const store = createStore(counterReducer);

store.subscribe(()=>{
  console.log(store.getState());
})

//dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounter());
