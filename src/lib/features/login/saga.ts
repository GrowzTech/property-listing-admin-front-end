import { put, takeLatest } from "redux-saga/effects";
import { loginActions as actions } from "./loginSlice";

function* userLoginSaga() {
  console.log("clicked");
  yield put(actions.setIsLoggingIn(false));
}

export function* loginSaga() {
  yield takeLatest(actions.login, userLoginSaga);
}
