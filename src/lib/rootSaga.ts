import { all } from "redux-saga/effects";
import { loginSaga } from "@/lib/features/login/saga";

export default function* rootSaga() {
  yield all([loginSaga()]);
}
