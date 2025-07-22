const bases = {
  user: "users",
  auth: "auth",
  property:"property"
};
export const apiRoutes = {
  auth: {
    login: `${bases.auth}/login`,
    refreshToken: `${bases.auth}/refresh-token`,
    logout: `${bases.auth}/logout`,
  },
  user: {},
  property: {
    property: `${bases.property}`,
    image: `${bases.property}/:id/upload-images`,
  },
};
