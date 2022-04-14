const exportObject = {
  baseApiUrl: process.env.REACT_APP_BASE_API_URL || "http://localhost:3000",
  apiVersion: process.env.API_VERSION || "/api/v1",
};

export default exportObject;
