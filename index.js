// step: 1.state 
// 2.dispatch action 
//3.reducer
//4.update store-- getState(),dispatch(), subscribe()

const { createStore } = require("redux");

//defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADDUSER = "ADDUSER";
const INCREMENTBYVALUE = "INCREMENTBYVALUE ";

//state
const initialCounterState = {
    count: 0,
    user: ["anisul"]
}

//action-object-type,payload : increment or decrement
const counterIncrementAction = () => {
    return {
        type: INCREMENT
    }
}

const counterDecrementAction = () => {
    return {
        type: DECREMENT
    }
}
const addUserAction = (value) => {
    return {
        type: ADDUSER,
        payload: value
    }
}
const IncrementByValue = (value) => {
    return {
        type: INCREMENTBYVALUE,
        payload: value
    }
}

// create reducer for count

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case INCREMENTBYVALUE:
            return {
                ...state,
                count: state.count + action.payload
            }

        case ADDUSER:
            return {
                user: [...state.user, action.payload]
            }

        default:
            state
    }
}

//create store

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

//dispatch action

// store.dispatch(counterIncrementAction())
// store.dispatch(IncrementByValue(5))
store.dispatch(addUserAction("Shakiba"))
store.dispatch(addUserAction("Alam"))