const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    cart: 0,
    total: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state, // ini dilakukan agar ketika state mengalami perubahan state lama tidak terhapus
                cart: state.cart + 1
            }

        case 'CHANGE_TOTAL':
            return {
                ...state,
                total: state.total + action.new_value
            }

        default:
            return state;
    }
}

//Store
const store = createStore(rootReducer); // ini cara membuat store
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('Store change!');
}); // subscribe akan dipanggil secara otomatis ketika terjadi perubahan pada store

//Dispatching Action
store.dispatch({ type: 'ADD_CART' });
store.dispatch({ type: 'CHANGE_TOTAL', new_value: 10000 });
console.log(store.getState());
