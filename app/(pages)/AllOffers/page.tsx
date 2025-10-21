"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/app/components/BottomNav";
import ProductOfferItem from "@/app/components/ProductOfferItem";
import { useGetOffersQuery } from "@/app/store/api/offersApi";
import type { GetOffersQueryParams } from "@/app/types/api.types";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import ErrorMessage from "@/app/components/ErrorMessage";

export default function AllOffersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<GetOffersQueryParams>({
    page: 1,
    limit: 20,
    sortBy: "offerEndDate",
    order: "asc",
  });

  // Load filters from URL params
  useEffect(() => {
    const params: GetOffersQueryParams = {
      page: 1,
      limit: 20,
      sortBy: (searchParams.get("sortBy") as any) || "offerEndDate",
      order: (searchParams.get("order") as any) || "asc",
    };

    const chainName = searchParams.get("chainName");
    const supermarketAisle = searchParams.get("supermarketAisle");
    const brand = searchParams.get("brand");
    const search = searchParams.get("search");

    if (chainName) params.chainName = chainName as any;
    if (supermarketAisle) params.supermarketAisle = supermarketAisle as any;
    if (brand) params.brand = brand;
    if (search) {
      params.search = search;
      setSearchQuery(search);
      setDebouncedSearch(search);
    }

    setFilters(params);
  }, [searchParams]);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Update filters when search changes
  useEffect(() => {
    if (debouncedSearch) {
      setFilters((prev) => ({ ...prev, search: debouncedSearch, page: 1 }));
      setPage(1);

      // Update URL
      const params = new URLSearchParams(searchParams.toString());
      params.set("search", debouncedSearch);
      router.push(`/AllOffers?${params.toString()}`, { scroll: false });
    } else {
      setFilters((prev) => {
        const { search, ...rest } = prev;
        return { ...rest, page: 1 };
      });
      setPage(1);

      // Remove search from URL
      const params = new URLSearchParams(searchParams.toString());
      params.delete("search");
      const newUrl = params.toString()
        ? `/AllOffers?${params.toString()}`
        : "/AllOffers";
      router.push(newUrl, { scroll: false });
    }
  }, [debouncedSearch]);

  const { data, isLoading, error, isFetching } = useGetOffersQuery(filters);

  const handleLoadMore = () => {
    if (data && page < data.pagination.totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      setFilters((prev) => ({ ...prev, page: nextPage }));
    }
  };

  const hasActiveFilters =
    searchParams.get("chainName") ||
    searchParams.get("supermarketAisle") ||
    searchParams.get("brand") ||
    searchParams.get("search");

  return (
    <main className="min-h-screen flex flex-col relative container mx-auto bg-white-2">
      <Header />
      <div className="px-[25px] py-[18px] pb-32">
        <div>
          <h4 className="text-black-1 text-[22px] font-semibold leading-[130%] font-figtree">
            Explore All Offers
          </h4>
          <div className="flex items-center gap-2.5 mt-3">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-gray-1 w-full placeholder:text-gray-1 font-figtree text-sm font-normal rounded-[1000px] gradient2 h-[42px] pl-[46px] pr-4"
                placeholder="Search products (e.g., tonno, latte, mozzarella)"
              />
              <span className="flex items-center justify-center absolute left-3.5 top-1/2 -translate-y-1/2">
                <Image src="/icons/search.svg" width={14} height={14} alt="" />
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2"
                >
                  <Image
                    src="/icons/x.svg"
                    width={16}
                    height={16}
                    alt="Clear"
                  />
                </button>
              )}
            </div>
            <Link
              href="/AllOffers/filters"
              className={`flex items-center justify-center rounded-[1000px] border w-[42px] h-[42px] ${
                hasActiveFilters
                  ? "border-green-2 bg-green-2/10"
                  : "border-solid/[0.15]"
              }`}
            >
              <Image src="/icons/filter.svg" width={20} height={20} alt="" />
            </Link>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-3 flex flex-wrap gap-2">
              {searchParams.get("chainName") && (
                <span className="px-3 py-1.5 bg-green-2/15 text-black-1 rounded-full text-sm font-medium capitalize">
                  {searchParams.get("chainName")}
                </span>
              )}
              {searchParams.get("supermarketAisle") && (
                <span className="px-3 py-1.5 bg-green-2/15 text-black-1 rounded-full text-sm font-medium capitalize">
                  {searchParams.get("supermarketAisle")}
                </span>
              )}
              {searchParams.get("brand") && (
                <span className="px-3 py-1.5 bg-green-2/15 text-black-1 rounded-full text-sm font-medium capitalize">
                  {searchParams.get("brand")}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Info */}
        {data && (
          <div className="mt-4 flex items-center justify-between text-sm text-gray-1">
            <span>
              Showing {data.offers.length} of {data.pagination.totalItems}{" "}
              offers
            </span>
            <span>
              Page {data.pagination.currentPage} of {data.pagination.totalPages}
            </span>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="mt-6">
            <LoadingSpinner />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mt-6">
            <ErrorMessage
              message="Failed to load offers. Please try again."
              onRetry={() => window.location.reload()}
            />
          </div>
        )}

        {/* Offers List */}
        {data && data.offers.length > 0 && (
          <div className="mt-6">
            {data.offers.map((offer) => (
              <ProductOfferItem key={offer._id} offer={offer} />
            ))}

            {/* Load More Button */}
            {data.pagination.currentPage < data.pagination.totalPages && (
              <button
                onClick={handleLoadMore}
                disabled={isFetching}
                className="w-full mt-4 py-3 px-6 bg-black text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/90 transition"
              >
                {isFetching ? "Loading..." : "Load More Offers"}
              </button>
            )}
          </div>
        )}

        {/* Empty State */}
        {data && data.offers.length === 0 && (
          <div className="mt-10 text-center">
            <div className="gradient3 w-14 h-14 rounded-[12px] flex items-center justify-center mx-auto mb-4">
              <Image src="/icons/search.svg" width={24} height={24} alt="" />
            </div>
            <h3 className="text-2xl font-semibold text-black-1 mb-2">
              No offers found
            </h3>
            <p className="text-gray-1 mb-4">
              Try adjusting your search or filters
            </p>
            {hasActiveFilters && (
              <Link
                href="/AllOffers"
                className="inline-block px-6 py-3 bg-black text-white rounded-full font-medium"
              >
                Clear Filters
              </Link>
            )}
          </div>
        )}
      </div>
      <BottomNav />
    </main>
  );
}
