const APP_NAME = process.env["NEXT_PUBLIC_APP_NAME"] ?? "";

export const LOCAL_STORAGE_KEYS = {
  USER_INFO: "broomUser" + APP_NAME,
  GOOGLE_OAUTH: "broomGoogleOauth" + APP_NAME,
  GOOGLE_ACCESS_TOKEN: "broomGoogleAccessToken" + APP_NAME,
  USER_ROLE: "broomUserRole" + APP_NAME,
  PREVIOUS_PATH: "previousPath" + APP_NAME,
};
