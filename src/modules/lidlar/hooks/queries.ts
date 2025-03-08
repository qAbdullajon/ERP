import { useQuery } from "@tanstack/react-query";
import { ParamsType } from "@types";
import { getLids } from "../servise";

export function useGetLidsQuery(params: ParamsType) {
  return useQuery({
    queryKey: ["lids", params],
    queryFn: () => getLids(params),
  });
}