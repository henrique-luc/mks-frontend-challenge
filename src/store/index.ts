import { legacy_createStore as createStore, combineReducers } from "redux";

import { reducerProducts } from "./modules/ProductsList/reducers";

const reducers = combineReducers({
  products: reducerProducts,
});

export const store = createStore(reducerProducts);
