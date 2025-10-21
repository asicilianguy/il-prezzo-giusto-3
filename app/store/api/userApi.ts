import { apiSlice } from "./apiSlice";
import type {
  User,
  UpdateUserRequest,
  UpdateNotificationPreferencesRequest,
} from "@/app/types/api.types";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<User, void>({
      query: () => "/users/user",
      providesTags: ["User"],
    }),

    updateUser: builder.mutation<{ message: string }, UpdateUserRequest>({
      query: (updates) => ({
        url: "/users/user",
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["User"],
    }),

    updateNotificationPreferences: builder.mutation
      {
        message: string;
        notificationPreferences: User["notificationPreferences"];
      },
      UpdateNotificationPreferencesRequest
    >({
      query: (preferences) => ({
        url: "/users/user/notifications",
        method: "PATCH",
        body: preferences,
      }),
      invalidatesTags: ["User"],
    }),

    addPreferredSupermarket: builder.mutation
      { message: string; preferredSupermarkets: string[] },
      { supermarket: string }
    >({
      query: (body) => ({
        url: "/users/user/supermarkets",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    removePreferredSupermarket: builder.mutation
      { message: string; preferredSupermarkets: string[] },
      string
    >({
      query: (supermarket) => ({
        url: `/users/user/supermarkets/${supermarket}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    addPreferredBrand: builder.mutation
      { message: string; preferredBrands: string[] },
      { brand: string }
    >({
      query: (body) => ({
        url: "/users/user/brands",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    removePreferredBrand: builder.mutation
      { message: string; preferredBrands: string[] },
      string
    >({
      query: (brand) => ({
        url: `/users/user/brands/${brand}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
  useUpdateNotificationPreferencesMutation,
  useAddPreferredSupermarketMutation,
  useRemovePreferredSupermarketMutation,
  useAddPreferredBrandMutation,
  useRemovePreferredBrandMutation,
} = userApi;