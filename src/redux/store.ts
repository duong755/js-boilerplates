import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { Action, AnyAction, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { createEpicMiddleware } from "redux-observable";

import { rootReducer, MyAppState } from "#/redux/slice";
import { rootSaga } from "#/redux/saga";
import { epicActions, rootEpic } from "#/redux/epic";
import type { EpicDependencies } from "#/redux/epic";

const sagaMiddleware = createSagaMiddleware<MyAppState>();
const epicMiddleware = createEpicMiddleware<Action<string>, Action<string>, MyAppState, EpicDependencies>({
  dependencies: epicActions,
});

const reduxStore = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ thunk: true }) //
      .concat(sagaMiddleware)
      .concat(epicMiddleware);
  },
  preloadedState: {
    language: {
      value: "en",
      loading: false,
    },
  },
});

sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);

export { reduxStore };
export type MyAppDispatch = typeof reduxStore.dispatch;
export const useReduxStore: <TAction extends Action<unknown> = AnyAction>() => Store<MyAppState, TAction> = useStore;
export const useAppDispatch: () => MyAppDispatch = useDispatch;
export const useAppSelector = useSelector as TypedUseSelectorHook<MyAppState>;
