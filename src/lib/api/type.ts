import { AxiosProgressEvent, CancelToken, Method } from "axios";
import { User } from "lucide-react";

export interface HeaderObj {
  Authorization?: string;
  RFTOKEN?: string;
}

export interface IAPICallConfig {
  route: string;
  method: Method;
  body?: object | FormData;
  query?: object;
  header?: HeaderObj;
  isSecureRoute?: boolean;
  onUploadProgress?: (event: AxiosProgressEvent) => void;
  cancelToken?: CancelToken;
}

export interface IUserModel {
  accessToken?: string;
  refreshToken?: string;
}
