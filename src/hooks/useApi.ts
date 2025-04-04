import { useDispatch } from "react-redux";
import { get, post, put, deleteApi, customDeleteApi } from "../api/apiservice";

import { useCallback } from "react";
import { setError, setShowLoader, setSuccess } from "../reducers/bannerSlice";

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

type ApiProps<T> = {
  method: "get" | "post" | "put" | "delete" | "customDelete";
  url: string;
  data?: unknown;
  customHeaders?: string;
  id?: unknown;
  onSuccess?: (data: T) => void;
  onError?: (error: ApiResponse<T>) => void;
  loaderDuration?: number;
  loaderMessage?: string;
};
const MIN_LOADER_DURATION = 500;

const useApi = <T>() => {
  const dispatch = useDispatch();

  const apiCall = useCallback(
    async (props: ApiProps<T>) => {
      const {
        method,
        url,
        data,
        customHeaders,
        id,
        onSuccess,
        onError,
        loaderDuration,
        loaderMessage = "",
      } = props;

      const showLoader =
        method === "post" || method === "put" || method === "delete";

      const startTime = Date.now(); // Track the start time of the request
      const minLoaderDuration = loaderDuration || MIN_LOADER_DURATION;
      
      dispatch(setShowLoader({ show: true, message: loaderMessage })); 

      let response;

      if (method === "get") {
        response = await get({ url, data, customHeaders });
      } else if (method === "post") {
        response = await post({ url, data, customHeaders });
      } else if (method === "put") {
        response = await put({ url, data, customHeaders, id });
      } else if (method === "delete") {
        response = await deleteApi({ url, customHeaders, id });
      } else if (method === "customDelete") {
        response = await customDeleteApi({ url, customHeaders, id });
      } else {
        throw new Error("Invalid HTTP method");
      }

      const elapsedTime = Date.now() - startTime; // Calculate elapsed time
      const remainingTime = minLoaderDuration - elapsedTime;

      // Ensure the loader stays for the minimum duration
      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }
      if (response.success) {
         dispatch(setShowLoader({ show: false, message: loaderMessage }));
        dispatch(
          setSuccess({ success: true, successMessage: response.message })
        );
        if (onSuccess) {
          onSuccess(response.data);
        }
      } else {
        dispatch(setShowLoader({ show: false, message: loaderMessage}));
        dispatch(
          setError({
            error: true,
            errorMessage: response.message,
          })
        );
        if (onError) {
          onError(response.data);
        }
      }
    },
    [dispatch]
  );

  return { apiCall };
};

export default useApi;
