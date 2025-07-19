import { all } from "redux-saga/effects";
import { loginSaga } from "@/lib/features/auth/login/saga";

export default function* rootSaga() {
  yield all([loginSaga()]);
}
