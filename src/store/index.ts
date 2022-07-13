import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { reducerSidebar } from "./modules/SideBar/reducer";

const reducers = combineReducers({ sidebar: reducerSidebar });

export const store = createStore(reducers);
