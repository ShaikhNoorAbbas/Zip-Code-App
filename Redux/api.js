// api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.zippopotam.us/" }), // Replace '/api' with your API endpoint
  endpoints: (builder) => ({
    getApiData: builder.query({
      query: (query) => `in/${query}`,
    }),
  }),
});

export const { useGetApiDataQuery } = api;
export default api;
