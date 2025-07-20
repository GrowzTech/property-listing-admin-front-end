export interface loginState {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    _id: string;
    fullName: string;
  };
  isLoggedIn: boolean;
  token: string | null;
  isSendingResetLink: boolean;
}

export interface LoginResponse {
  message: string;
  access_token: string;
  refresh_token: string;
  user: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: "ADMIN" | "USER" | string; // You can narrow this down if needed
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    fullName: string;
    __v: number;
  };
}

export interface ILoginData {
  email: string;
  password: string;
}
