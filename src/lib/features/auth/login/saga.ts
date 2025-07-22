import { call, put, takeLatest } from "redux-saga/effects";
import { loginActions as actions } from "./loginSlice";
import makeCall from "@/lib/api";
import { ILoginData, LoginResponse } from "./type";
import { PayloadAction } from "@reduxjs/toolkit";
import { apiRoutes } from "@/lib/api/apiRoutes";
import { toast } from "react-toastify";

function* userLoginSaga(action: PayloadAction<ILoginData>) {
  try {
    const response: LoginResponse = yield call(makeCall, {
      method: "POST",
      isSecureRoute: false,
      route: apiRoutes.auth.login,
      body: action.payload,
    });
    if (response) {
      yield put(actions.setToken(response.access_token));
      toast.success("Login successful!");
      localStorage.setItem(
        "user",
        JSON.stringify({
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
        })
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: unknown) {
    const err = error as { message?: string };
    toast.error("Login failed: " + (err?.message || "Unknown error"));
  } finally {
    yield put(actions.setIsLoggingIn(false));
  }
}

function* userForgotPasswordSaga(action: PayloadAction<ILoginData>) {
  try {
    const response: LoginResponse = yield call(makeCall, {
      method: "POST",
      isSecureRoute: false,
      route: apiRoutes.auth.login,
      body: action.payload,
    });
    if (response) {
      yield put(actions.setToken(response.access_token));
      toast.success("Login successful!");
      localStorage.setItem(
        "user",
        JSON.stringify({
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
        })
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: { message?: string } | any) {
    toast.error("Login failed: " + (error?.message || "Unknown error"));
  } finally {
    yield put(actions.setIsLoggingIn(false));
  }
}

export function* loginSaga() {
  yield takeLatest(actions.login.type, userLoginSaga);
  yield takeLatest(actions.forgotPassword.type, userForgotPasswordSaga);
}
