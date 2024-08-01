import { redirect } from "react-router-dom";
import { instance } from "./instance";

export const getUserStatus = async () => {
  try {
    return await instance.get("/api/accounts/user");
  } catch (err) {
    throw err;
  }
};

export const postAddRoutines = async (preferred_routine_categories) => {
  try {
    const res = await instance.post("/api/accounts/custom-routines/", {
      preferred_routine_categories,
    });
    if (res.status == 200) {
      return true;
    }
  } catch (err) {
    throw err;
  }
};
