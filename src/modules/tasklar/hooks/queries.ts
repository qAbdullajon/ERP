import { useQuery } from "@tanstack/react-query";
import { ParamsType } from "@types";
import { getTasks } from "../servise";

export function useGetTasksQuery(params: ParamsType) {
    return useQuery({
      queryKey: ["tasks", params],
      queryFn: () => getTasks(params),
    });
  }