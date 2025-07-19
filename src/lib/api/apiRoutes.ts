const bases = {
  user: "users",
  auth: "auth",
};
export const apiRoutes = {
  auth: {
    login: `${bases.auth}/login`,
    refreshToken: `${bases.auth}/refresh-token`,
    logout: `${bases.auth}/logout`,
  },
  user: {},
};
