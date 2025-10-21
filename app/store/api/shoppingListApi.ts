import { apiSlice } from "./apiSlice";
import type {
  ShoppingListItem,
  AddToShoppingListRequest,
  UpdateShoppingListItemRequest,
} from "@/app/types/api.types";

export const shoppingListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getShoppingList: builder.query<{ shoppingList: ShoppingListItem[] }, void>(
      {
        query: () => "/users/shopping-list",
        providesTags: ["ShoppingList"],
      }
    ),

    addToShoppingList: builder.mutation
      { message: string; productId: string },
      AddToShoppingListRequest
    >({
      query: (item) => ({
        url: "/users/shopping-list",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["ShoppingList", "User"],
    }),

    updateShoppingListItem: builder.mutation
      { message: string },
      { productId: string; updates: UpdateShoppingListItemRequest }
    >({
      query: ({ productId, updates }) => ({
        url: `/users/shopping-list/${productId}`,
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: ["ShoppingList"],
    }),

    removeFromShoppingList: builder.mutation<{ message: string }, string>({
      query: (productId) => ({
        url: `/users/shopping-list/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ShoppingList", "User"],
    }),

    clearShoppingList: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: "/users/shopping-list",
        method: "DELETE",
      }),
      invalidatesTags: ["ShoppingList", "User"],
    }),
  }),
});

export const {
  useGetShoppingListQuery,
  useAddToShoppingListMutation,
  useUpdateShoppingListItemMutation,
  useRemoveFromShoppingListMutation,
  useClearShoppingListMutation,
} = shoppingListApi;