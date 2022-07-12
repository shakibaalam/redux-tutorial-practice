const { createStore } = require("redux");
const { combineReducers } = require("redux");


// product reducer
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//state
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfproducts: 2
};
//action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}
//reducer

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }

        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                numberOfproducts: state.numberOfproducts + 1
            }

        default:
            return state;
    }
}
//store

// const store = createStore(productReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// })
// store.dispatch(getProducts())
// store.dispatch(addProducts("pen"))

//cart reducer

const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

//state
const initialCartState = {
    carts: ["sugar"],
    numberOfproducts: 1
};
//action
const getCarts = () => {
    return {
        type: GET_CART_ITEMS
    }
}
const addCarts = (product) => {
    return {
        type: ADD_CART_ITEMS,
        payload: product
    }
}
//reducer

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }

        case ADD_CART_ITEMS:
            return {
                carts: [...state.carts, action.payload],
                numberOfproducts: state.numberOfproducts + 1
            }

        default:
            return state;
    }
}
//store

// const store = createStore(cartReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// })
// store.dispatch(getCarts())
// store.dispatch(addCarts("pen"))

// multiple reducer store
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProducts("pen"))
store.dispatch(getCarts())
store.dispatch(addCarts("pen"))
