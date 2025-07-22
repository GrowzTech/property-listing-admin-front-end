import { call, put, takeLatest } from "redux-saga/effects";
import { propertyActions as actions } from "./propertySlice";
import makeCall from "@/lib/api";
import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IPropertyData, Property, PropertyResponse } from "./type"; // adjust imports as needed
import { apiRoutes } from "@/lib/api/apiRoutes";

function* fetchPropertiesSaga(action: PayloadAction<Record<string, string>>) {
  try {
    const params = action.payload || {};
    const queryString = new URLSearchParams(params).toString();
    const fullRoute = `${apiRoutes.property.property}?${queryString}`;

    const response: PropertyResponse = yield call(makeCall, {
      method: "GET",
      isSecureRoute: true,
      route: fullRoute,
    });

    if (response) {
      yield put(actions.fetchpropertySuccess(response.data));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: { message?: string } | any) {
    toast.error(
      "Failed to fetch properties: " + (error?.message || "Unknown error")
    );
  }
}

function* fetchSinglePropertySaga(action: PayloadAction<string>) {
  try {
    const response: PropertyResponse = yield call(makeCall, {
      method: "GET",
      isSecureRoute: true,
      route: `${apiRoutes.property.property}/${action.payload}`,
    });

    if (response) {
      yield put(actions.fetchSinglePropertySuccess());
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: { message?: string } | any) {
    toast.error(
      "Failed to fetch property: " + (error?.message || "Unknown error")
    );
  }
}

// Add new property
function* addPropertySaga(action: PayloadAction<IPropertyData>) {
  try {
    const newProperty: Property = yield call(makeCall, {
      method: "POST",
      isSecureRoute: true,
      route: apiRoutes.property.property,
      body: action.payload,
    });
    yield put(actions.addPropertySuccess(newProperty));
    toast.success("Property added successfully!");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: { message?: string } | any) {
    yield put(actions.addPropertyFailure(error.message));
    toast.error(
      "Failed to add property: " + (error.message || "Unknown error")
    );
  }
}

// function* updatePropertySaga(action: PayloadAction<Property>) {
//   try {
//     const updatedProperty: Property = yield call(makeCall, {
//       method: "PUT",
//       isSecureRoute: true,
//       route: apiRoutes.propertyById(action.payload._id),
//       body: action.payload,
//     });
//     yield put(actions.updatePropertySuccess(updatedProperty));
//     toast.success("Property updated successfully!");
//   } catch (error: any) {
//     yield put(actions.updatePropertyFailure(error.message));
//     toast.error(
//       "Failed to update property: " + (error.message || "Unknown error")
//     );
//   }
// }

// function* deletePropertySaga(action: PayloadAction<string>) {
//   try {
//     yield call(makeCall, {
//       method: "DELETE",
//       isSecureRoute: true,
//       route: apiRoutes.propertyById(action.payload),
//     });
//     yield put(actions.deletePropertySuccess(action.payload));
//     toast.success("Property deleted successfully!");
//   } catch (error: any) {
//     yield put(actions.deletePropertyFailure(error.message));
//     toast.error(
//       "Failed to delete property: " + (error.message || "Unknown error")
//     );
//   }
// }

export function* propertySaga() {
  yield takeLatest(actions.fetchproperty.type, fetchPropertiesSaga);
  yield takeLatest(actions.fetchSingleproperty.type, fetchSinglePropertySaga);
  yield takeLatest(actions.addProperty.type, addPropertySaga);
  // yield takeLatest(actions.updateProperty.type, updatePropertySaga);
  // yield takeLatest(actions.deleteProperty.type, deletePropertySaga);
}
