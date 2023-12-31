import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addProduct, deleteProduct, updateProduct } from './api';
import { STORAGE_KEY } from './setting';

export const useAdd = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [STORAGE_KEY] });
    },
  });
};

export const useUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [STORAGE_KEY] });
    },
  });
};
export const useDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [STORAGE_KEY] });
    },
  });
};
