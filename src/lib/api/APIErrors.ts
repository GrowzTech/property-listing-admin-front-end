import { baseErrors, TErrorCodes } from "./ErrorCodes/index";

class APIError extends Error {
  code: string = baseErrors.UNKNOWN;

  constructor(code: TErrorCodes = baseErrors.UNKNOWN, message?: string) {
    super(message);
    this.code = code;
  }
}

export default APIError;
