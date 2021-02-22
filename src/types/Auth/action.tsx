import { Auth } from "./Auth";

// action strings
export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_GENERATE_TOKEN = "AUTH_GENERATE_TOKEN";
export const AUTH_VERIFY = "AUTH_VERIFY";


export interface LoginAction {
  type: typeof AUTH_LOGIN;
  auth:Auth ;
}

export type AuthActionTypes =
  | LoginAction

export type AppActions = AuthActionTypes;
