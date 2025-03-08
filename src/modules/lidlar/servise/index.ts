import axiosInstatce from "@http";
import { ParamsType } from "@types";

// ================= GET =====================
export async function getLids(params: ParamsType) {
  const res = await axiosInstatce.get("/lids", { params });
  return res?.data;
}

// ================= PATCH =====================
export async function patchStatus(data: { id: string; status: string }) {
  const { id, status } = data;
  const res = await axiosInstatce.patch(`/lids/${id}`, { status });
  return res.data;
}