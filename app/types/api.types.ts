// ===================================
// User Types
// ===================================

export interface UserLocation {
  type: "Point";
  coordinates: [number, number]; // [longitude, latitude]
}

export interface NotificationPreferences {
  notifyPreferredSupermarkets: boolean;
  notifyPreferredBrands: boolean;
  telegramDisclaimerAccepted: boolean;
}

export interface Subscription {
  status: "trial" | "active" | "expired";
  trialEndDate?: string;
}

export interface ShoppingListItem {
  _id: string;
  product: ProductOffer;
  quantity: number;
  notes?: string;
}

export interface User {
  userId: string;
  phone: string;
  location?: UserLocation;
  locationEnabled: boolean;
  preferredSupermarkets: string[];
  preferredBrands: string[];
  shoppingList: ShoppingListItem[];
  telegramId?: string;
  notificationPreferences: NotificationPreferences;
  subscription: Subscription;
}

// ===================================
// Product Offer Types
// ===================================

export type ChainName =
  | "aldi"
  | "bennet"
  | "centesimo"
  | "crai"
  | "decomarket"
  | "decosupermercati"
  | "despar"
  | "esselunga"
  | "eurospar"
  | "eurospin"
  | "famila"
  | "familamarket"
  | "familasuperstore"
  | "gigante"
  | "gulliver"
  | "ins"
  | "interspar"
  | "iper"
  | "lidl"
  | "md"
  | "mercatobig"
  | "mercatoextra"
  | "mercatolocal"
  | "naturasi"
  | "paghipoco"
  | "pam"
  | "pampanorama"
  | "pamsuperstore"
  | "penny"
  | "prestofresco"
  | "tigros"
  | "todis"
  | "unes";

export type SupermarketAisle =
  | "frutta e verdura"
  | "carne"
  | "pesce"
  | "salumi"
  | "formaggi"
  | "pasta e riso"
  | "vino"
  | "birra"
  | "snack salati"
  | "snack dolci"
  | "surgelati"
  | "in scatola"
  | "per la colazione"
  | "bio"
  | "senza lattosio"
  | "asiatico"
  | "multietnico"
  | "vegano"
  | "vegetariano"
  | "fitness"
  | "per il bambino"
  | "per la casa"
  | "per la persona"
  | "per il tuo mezzo di trasporto"
  | "animali domestici"
  | "giardinaggio"
  | "abbigliamento"
  | "elettrodomestici"
  | "bricolage"
  | "super alcolici"
  | "spesa base";

export interface ProductOffer {
  _id: string;
  productName: string;
  chainName: ChainName;
  supermarketAisle: SupermarketAisle;
  brand?: string;
  offerPrice: number;
  previousPrice?: number | null;
  discountPercentage?: number | null;
  pricePerUnit?: number | null;
  pricePerUnitType?: string | null;
  quantity: string;
  offerEndDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

// ===================================
// API Request/Response Types
// ===================================

// Auth
export interface RegisterRequest {
  phone: string;
  password: string;
  preferredSupermarkets?: string[];
}

export interface RegisterResponse {
  userId: string;
  phone: string;
  preferredSupermarkets: string[];
  token: string;
}

export interface LoginRequest {
  phone: string;
  password: string;
}

export interface LoginResponse {
  userId: string;
  token: string;
}

// User Profile
export interface UpdateUserRequest {
  preferredSupermarkets?: string[];
  preferredBrands?: string[];
  password?: string;
  location?: UserLocation;
  locationEnabled?: boolean;
  telegramId?: string;
}

export interface UpdateNotificationPreferencesRequest {
  notifyPreferredSupermarkets?: boolean;
  notifyPreferredBrands?: boolean;
  telegramDisclaimerAccepted?: boolean;
}

// Shopping List
export interface AddToShoppingListRequest {
  productId: string;
  quantity?: number;
  notes?: string;
}

export interface UpdateShoppingListItemRequest {
  quantity?: number;
  notes?: string;
}

// Product Offers
export type SortByField =
  | "offerEndDate"
  | "offerPrice"
  | "discountPercentage"
  | "pricePerUnit"
  | "productName"
  | "createdAt";

export type SortOrder = "asc" | "desc";

export interface GetOffersQueryParams {
  page?: number;
  limit?: number;
  sortBy?: SortByField;
  order?: SortOrder;
  chainName?: ChainName;
  supermarketAisle?: SupermarketAisle;
  brand?: string;
  search?: string;
  filterBy?: string;
}

export interface GetOffersResponse {
  offers: ProductOffer[];
  pagination: PaginationMeta;
}

export interface GetBrandsQueryParams {
  chainName?: ChainName;
  supermarketAisle?: SupermarketAisle;
}

export interface GetBrandsResponse {
  brands: string[];
}

// ===================================
// API Error Types
// ===================================

export interface ApiError {
  error: {
    code:
      | "VALIDATION_ERROR"
      | "UNAUTHORIZED"
      | "INVALID_CREDENTIALS"
      | "NOT_FOUND"
      | "SERVER_ERROR";
    message: string;
  };
}
