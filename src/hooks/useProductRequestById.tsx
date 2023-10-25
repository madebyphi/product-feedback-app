import { ProductRequest } from "@/types";
import { useQuery } from "react-query";

const fetchProductRequestsById = async () =>
  await fetch("/api/staticdata").then((res) => res.json());

export const useProductRequestsById = (id: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["productRequest"],
    queryFn: () => fetchProductRequestsById(),
  });

  let productRequest: ProductRequest = {};
  if (!isLoading && !error) {
    // console.log("now", isLoading, error, JSON.parse(data));
    productRequest = JSON.parse(data).productRequests.find(
      (item: any) => item.id.toString() === id
    );
  }

  return {
    data: productRequest,
    error,
    isLoading,
  };
};
