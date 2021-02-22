export interface Auth {
    message: string;
    token:string;
    payload: {
      iss: string;
      is: number;
      email: string;
      userType:string;
    }
  }

export interface UserAuth{
  email: string,
    password: string
}