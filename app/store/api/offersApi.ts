import { apiSlice } from "./apiSlice";
import type {
  ProductOffer,
  GetOffersQueryParams,
  GetOffersResponse,
  GetBrandsQueryParams,
  GetBrandsResponse,
} from "@/types/api.types";

export const offersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOffers: builder.query<GetOffersResponse, GetOffersQueryParams | void>({
      query: (params = {}) => {
        const queryParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            queryParams.append(key, String(value));
          }
        });

        const queryString = queryParams.toString();
        return `/offers${queryString ? `?${queryString}` : ""}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.offers.map(({ _id }) => ({
                type: "Offers" as const,
                id: _id,
              })),
              { type: "Offers", id: "LIST" },
            ]
          : [{ type: "Offers", id: "LIST" }],
    }),

    getOfferById: builder.query<ProductOffer, string>({
      query: (id) => `/offers/${id}`,
      providesTags: (result, error, id) => [{ type: "Offers", id }],
    }),

    getBrands: builder.query<GetBrandsResponse, GetBrandsQueryParams | void>({
      query: (params = {}) => {
        const queryParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            queryParams.append(key, String(value));
          }
        });

        const queryString = queryParams.toString();
        return `/offers/brands${queryString ? `?${queryString}` : ""}`;
      },
      providesTags: ["Brands"],
    }),
  }),
});

export const { useGetOffersQuery, useGetOfferByIdQuery, useGetBrandsQuery } =
  offersApi;
