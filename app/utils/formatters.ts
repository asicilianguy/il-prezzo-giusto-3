/**
 * Format price to Euro currency
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

/**
 * Format discount percentage
 */
export const formatDiscount = (discount: number): string => {
  return `-${discount.toFixed(0)}%`;
};

/**
 * Calculate days until expiry
 */
export const getDaysUntilExpiry = (expiryDate: string): number => {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const diffTime = expiry.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

/**
 * Format expiry text
 */
export const formatExpiry = (expiryDate: string): string => {
  const days = getDaysUntilExpiry(expiryDate);
  if (days < 0) return "Scaduta";
  if (days === 0) return "Scade oggi";
  if (days === 1) return "Scade domani";
  return `${days} giorni`;
};

/**
 * Format phone number to Italian format
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // Check if it's an Italian number starting with +39
  if (phone.startsWith("+39")) {
    return `+39 ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(
      8
    )}`;
  }

  return phone;
};
