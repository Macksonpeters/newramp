import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const Getfn = async (url: any, token?: any) => {
  const defaultToken = "fS8iRczRqdTpWgHlGExQsiIeaoUra38f";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  try {
    const response = await axios({
      method: "GET",
      url: url,
      headers,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetFnHook = (token?: any) => {
  return useMutation({
    mutationFn: (data: any) => Getfn(data, token),
  });
};
