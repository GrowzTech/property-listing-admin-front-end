import { all } from "redux-saga/effects";
import { loginSaga } from "@/lib/features/auth/login/saga";
import { propertySaga } from "./features/property/saga";

export default function* rootSaga() {
  yield all([loginSaga(), propertySaga()]);
}
