import { combineReducers, createStore } from "redux";
// eslint-disable-next-line import/namespace
import { timerReducer } from "./reducer";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  state: timerReducer,
});

export type ReducerType = ReturnType<typeof rootReducer>; // типизация стейта всего приложения
// export type RootReduxStoreType =  typeof store
export type TypedDispatch = ReducerType;
export const useTypedDispatch = () => useDispatch();

export const store = createStore(rootReducer);
