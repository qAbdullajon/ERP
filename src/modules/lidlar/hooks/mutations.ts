import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchStatus } from "../servise";

export function usePatchStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { id: string; status: string }) => patchStatus(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lids"] });
    },
    onError: (error) => {
      console.error("Statusni yangilashda xato:", error);
    },
  });
}
