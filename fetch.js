const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default

//constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAIL = "GET_TODOS_FAIL"
const API = "https://jsonplaceholder.typicode.com/todos"

//state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

//action
const getTodoRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
const getTodoFail = (error) => {
    return {
        type: GET_TODOS_FAIL,
        payload: error
    }
}
const getTodoSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

//reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case GET_TODOS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

//async action creator (fetch)
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodoRequest())
        axios.get(API)
            .then(res => {
                const todos = res.data;
                const titles = todos.map(todo => todo.title)
                // console.log(titles);
                dispatch(getTodoSuccess(titles))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(getTodoFail(errorMessage))
            })
    }
}
//store
const store = createStore(todosReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState());
})
//dispatch

store.dispatch(fetchData())