import { BASE_URL } from "@/constants/constants";
import { Users } from "@/models/models";

export default function getUsers(): Promise<Users> {
  return fetch(`${BASE_URL}?limit=10&skip=0&select=firstName,lastName,image`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })
    .then((data) => data.users);
}
