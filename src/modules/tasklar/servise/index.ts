import axiosInstatce from "@http";
import { ParamsType } from "@types";

// ================= GET =====================
export async function getTasks(params: ParamsType) {
    const res = await axiosInstatce.get("/tasks", { params });
    return res?.data
  }