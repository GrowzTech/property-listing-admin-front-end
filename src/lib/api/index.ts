import axios, { AxiosResponse } from "axios";
import { HeaderObj, IAPICallConfig, IUserModel } from "./type";
import APIError from "./APIErrors";
import { baseErrors } from "./ErrorCodes";
import { decodeToken, isJwtTokenExpired } from "./utils";
import { apiRoutes } from "./apiRoutes";

const API_ROUTE = process.env.NEXT_PUBLIC_API_URL;

const makeCall = async (config: IAPICallConfig) => {
  let accessToken;

  try {
    const fullURL = `${API_ROUTE}/${config.route}`;

    const header: HeaderObj = {};
    const user: IUserModel | undefined = JSON.parse(
      window.localStorage.getItem(localStorage.user) || "{}"
    );

    if (config.isSecureRoute && user) {
      accessToken = user?.accessToken || "";
      // Refresh token if token is expired
      const refreshedAccessToken = await refreshAuth(user);
      if (typeof refreshedAccessToken === "string")
        accessToken = refreshedAccessToken;

      header.Authorization = `Bearer ${accessToken}`;
    }
    const response: AxiosResponse = await axios({
      method: config.method,
      params: config.query,
      data: config.body,
      url: fullURL,
      headers: { ...header },
      responseType: "json",
      onUploadProgress: config.onUploadProgress,
    });
    if (response.statusText === "OK" || response.statusText === "Created") {
      return response.data;
    } else {
      throw new APIError(response.data?.code, response.data?.message);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response.status === 400 && error.response.data?.errors?.length) {
      throw new APIError(
        error.response.data.code,
        "Validation Error: \n" +
          error.response.data.errors
            ?.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (validationError: { msg?: string; path?: string; value: any }) =>
                `- ${validationError.msg || "Incorrect value"} on ${
                  validationError.path || ""
                }`
            )
            ?.join("\n ")
      );
    }
    if (error.response) {
      const { response } = error;
      if (error instanceof APIError) throw error;
      else throw new APIError(response.data?.code, response.data?.message);
    }
    throw new APIError(baseErrors.NETWORK);
  }
};

export const refreshAuth = async (user: IUserModel) => {
  try {
    const decodedAccessToken = user?.accessToken
      ? decodeToken(user?.accessToken)
      : undefined;
    if (!decodedAccessToken || isJwtTokenExpired(user?.refreshToken ?? "")) {
      localStorage.removeItem(localStorage.user);
      //   const isPublicRoute = publicRoutes.find(item =>
      //     window.location.hash.includes(item),
      //   );
      //   if (!isPublicRoute) window.location.replace(`#/${routeConstants.login}`);
      //   return;
    } else if (isJwtTokenExpired(user?.accessToken ?? "")) {
      const refreshedAccessToken = await refreshAccessToken(
        user?.refreshToken ?? ""
      );

      const updateData = {
        ...user,
        accessToken: refreshedAccessToken ?? "",
      };

      // update local storage
      localStorage.setItem(localStorage.user, JSON.stringify(updateData));

      return updateData.accessToken;
    }
  } catch (error) {
    throw {
      // eslint-disable-next-line quotes
      messasge: "Couldn't refresh token",
    };
  }
};

const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response: {
      data: {
        data: string;
      };
    } = await axios.post(`${API_ROUTE}${apiRoutes.auth.refreshToken}`, {
      refreshToken,
    });

    if (response) {
      return response.data.data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.response?.data) {
      const { response } = error;
      if (error instanceof APIError) throw error;
      else
        throw {
          message: response.data?.message,
          responseEnum: response?.data?.responseEnum,
        };
    } else {
      throw new APIError(baseErrors.NETWORK);
    }
  }
};

export default makeCall;
