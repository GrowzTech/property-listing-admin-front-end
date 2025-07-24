const bases = {
  user: "users",
  auth: "auth",
  property: "property",
};
export const apiRoutes = {
  auth: {
    login: `/${bases.auth}/login`,
    refreshToken: `/${bases.auth}/refresh`,
    logout: `/${bases.auth}/logout`,
  },
  user: {},
  property: {
    property: `${bases.property}`,
    uploadmage: `${bases.property}/upload-images`,
  },
};
