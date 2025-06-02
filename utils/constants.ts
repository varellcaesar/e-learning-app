const APP_NAME = process.env["NEXT_PUBLIC_APP_NAME"] ?? "";

export const LOCAL_STORAGE_KEYS = {
  USER_INFO: "benUser" + APP_NAME,
  GOOGLE_OAUTH: "benGoogleOauth" + APP_NAME,
  GOOGLE_ACCESS_TOKEN: "benGoogleAccessToken" + APP_NAME,
  USER_ROLE: "benUserRole" + APP_NAME,
  PREVIOUS_PATH: "previousPath" + APP_NAME,
};
