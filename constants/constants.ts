import { StaticRoutes } from "@/types/types";

export const BASE_URL = "https://dummyjson.com/users";
export const USERS_LIMIT = "10";
export const USERS_SELECT_PARAMS = "firstName,lastName,image";
export const USERS_PAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const STATIC_ROUTES: StaticRoutes = {
  home: {
    name: "HOME",
    path: "/",
  },
  users: {
    name: "USERS",
    path: "/users/1",
  },
};
