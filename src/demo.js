import myReducer from "./reducers";
import { sort, status } from "./actions";
import { createStore } from "redux";

const store=createStore(myReducer);
console.log('Default: ', store.getState());

store.dispatch(status());

console.log('Toggle_status: ', store.getState());

store.dispatch(sort({
    by: 'aưbc',
    value: 20
}));
console.log('Sort: ', store.getState());