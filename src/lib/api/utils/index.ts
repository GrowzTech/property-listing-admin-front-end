import { jwtDecode, JwtPayload } from "jwt-decode";

/**
 * Checks if a JWT token is expired.
 * @param token - The JWT token to check.
 * @returns `true` if the token is expired, `false` otherwise.
 */
export const isJwtTokenExpired = (token: string) => {
  if (!token) return true;
  try {
    const decoded = decodeToken(token);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in miliseconds
    if (!decoded || !decoded?.exp) return true;
    return currentTime > decoded?.exp;
  } catch (error) {
    return true; // Assume the token is expired if there's an error
  }
};

/**
 * Decodes a JWT token and returns the decoded payload.
 * @param token - The JWT token to decode.
 * @returns The decoded payload if the token is valid, otherwise undefined.
 */
export const decodeToken = (token: string) => {
  let decoded = undefined;
  try {
    decoded = jwtDecode<JwtPayload>(token);
  } catch (error) {
    console.log(error);
  }
  return decoded;
};

export const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const userString = localStorage.getItem("user");
    if (!userString) return null;

    try {
      const user = JSON.parse(userString);
      return user?.accessToken || null;
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return null;
    }
  }
  return null;
};
