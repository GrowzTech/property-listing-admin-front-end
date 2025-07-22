import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/auth/login/loginSlice";
import propertyReducer from "./features/property/propertySlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      login: loginReducer,
      property: propertyReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

// Infer types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
