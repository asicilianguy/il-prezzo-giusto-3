"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "@/app/components/SecondaryButton";
import { useGetBrandsQuery } from "@/app/store/api/offersApi";
import {
  SUPERMARKET_CHAINS,
  SUPERMARKET_AISLES,
  SUPERMARKET_DISPLAY_NAMES,
} from "@/constants/supermarkets";
import type {
  ChainName,
  SupermarketAisle,
  SortByField,
  SortOrder,
} from "@/app/types/api.types";

export default function FiltersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedChain, setSelectedChain] = useState<ChainName | "">("");
  const [selectedAisle, setSelectedAisle] = useState<SupermarketAisle | "">("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortBy, setSortBy] = useState<SortByField>("offerEndDate");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  // Get brands based on selected filters
  const { data: brandsData } = useGetBrandsQuery({
    chainName: selectedChain || undefined,
    supermarketAisle: selectedAisle || undefined,
  });

  useEffect(() => {
    // Load filters from URL params
    const chain = searchParams.get("chainName") as ChainName | null;
    const aisle = searchParams.get(
      "supermarketAisle"
    ) as SupermarketAisle | null;
    const brand = searchParams.get("brand");
    const sort = searchParams.get("sortBy") as SortByField | null;
    const order = searchParams.get("order") as SortOrder | null;

    if (chain) setSelectedChain(chain);
    if (aisle) setSelectedAisle(aisle);
    if (brand) setSelectedBrand(brand);
    if (sort) setSortBy(sort);
    if (order) setSortOrder(order);
  }, [searchParams]);

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (selectedChain) params.set("chainName", selectedChain);
    if (selectedAisle) params.set("supermarketAisle", selectedAisle);
    if (selectedBrand) params.set("brand", selectedBrand);
    params.set("sortBy", sortBy);
    params.set("order", sortOrder);

    router.push(`/AllOffers?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setSelectedChain("");
    setSelectedAisle("");
    setSelectedBrand("");
    setSortBy("offerEndDate");
    setSortOrder("asc");
    router.push("/AllOffers");
  };

  return (
    <main className="min-h-screen flex flex-col relative container mx-auto bg-white-2">
      <div className="px-[25px] py-[18px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/AllOffers" className="flex items-center gap-2">
            <Image
              src="/icons/arrow-left.svg"
              width={20}
              height={20}
              alt="Back"
            />
            <span className="text-lg font-semibold text-black-1">Filters</span>
          </Link>
          <button
            onClick={handleClearFilters}
            className="text-sm font-medium text-red-2"
          >
            Clear All
          </button>
        </div>

        {/* Supermarket Chain Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black-1 mb-3">
            Supermarket
          </h3>
          <div className="bg-white rounded-2xl p-2 max-h-[250px] overflow-y-auto">
            <div className="space-y-1">
              <button
                onClick={() => setSelectedChain("")}
                className={`w-full text-left px-4 py-3 rounded-xl transition ${
                  selectedChain === ""
                    ? "bg-green-2/15 font-medium"
                    : "hover:bg-gray-50"
                }`}
              >
                All Supermarkets
              </button>
              {SUPERMARKET_CHAINS.map((chain) => (
                <button
                  key={chain}
                  onClick={() => setSelectedChain(chain)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition ${
                    selectedChain === chain
                      ? "bg-green-2/15 font-medium"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {SUPERMARKET_DISPLAY_NAMES[chain]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Department/Aisle Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black-1 mb-3">
            Department
          </h3>
          <div className="bg-white rounded-2xl p-2 max-h-[250px] overflow-y-auto">
            <div className="space-y-1">
              <button
                onClick={() => setSelectedAisle("")}
                className={`w-full text-left px-4 py-3 rounded-xl transition capitalize ${
                  selectedAisle === ""
                    ? "bg-green-2/15 font-medium"
                    : "hover:bg-gray-50"
                }`}
              >
                All Departments
              </button>
              {SUPERMARKET_AISLES.map((aisle) => (
                <button
                  key={aisle}
                  onClick={() => setSelectedAisle(aisle)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition capitalize ${
                    selectedAisle === aisle
                      ? "bg-green-2/15 font-medium"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {aisle}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Filter */}
        {brandsData && brandsData.brands.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-black-1 mb-3">Brand</h3>
            <div className="bg-white rounded-2xl p-2 max-h-[250px] overflow-y-auto">
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedBrand("")}
                  className={`w-full text-left px-4 py-3 rounded-xl transition capitalize ${
                    selectedBrand === ""
                      ? "bg-green-2/15 font-medium"
                      : "hover:bg-gray-50"
                  }`}
                >
                  All Brands
                </button>
                {brandsData.brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition capitalize ${
                      selectedBrand === brand
                        ? "bg-green-2/15 font-medium"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sort Options */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black-1 mb-3">Sort By</h3>
          <div className="bg-white rounded-2xl p-4">
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === "offerEndDate"}
                  onChange={() => setSortBy("offerEndDate")}
                  className="w-5 h-5 text-green-2"
                />
                <span className="text-base text-black-1">Expiry Date</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === "offerPrice"}
                  onChange={() => setSortBy("offerPrice")}
                  className="w-5 h-5 text-green-2"
                />
                <span className="text-base text-black-1">Price</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === "discountPercentage"}
                  onChange={() => setSortBy("discountPercentage")}
                  className="w-5 h-5 text-green-2"
                />
                <span className="text-base text-black-1">Discount %</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === "pricePerUnit"}
                  onChange={() => setSortBy("pricePerUnit")}
                  className="w-5 h-5 text-green-2"
                />
                <span className="text-base text-black-1">Price per Unit</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === "createdAt"}
                  onChange={() => setSortBy("createdAt")}
                  className="w-5 h-5 text-green-2"
                />
                <span className="text-base text-black-1">Recently Added</span>
              </label>
            </div>
          </div>
        </div>

        {/* Sort Order */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black-1 mb-3">Order</h3>
          <div className="bg-white rounded-2xl p-4">
            <div className="flex gap-3">
              <button
                onClick={() => setSortOrder("asc")}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition ${
                  sortOrder === "asc"
                    ? "bg-green-2 text-black-1"
                    : "bg-gray-100 text-gray-1"
                }`}
              >
                Ascending
              </button>
              <button
                onClick={() => setSortOrder("desc")}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition ${
                  sortOrder === "desc"
                    ? "bg-green-2 text-black-1"
                    : "bg-gray-100 text-gray-1"
                }`}
              >
                Descending
              </button>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="pb-6">
          <SecondaryButton onClick={handleApplyFilters}>
            Apply Filters
          </SecondaryButton>
        </div>
      </div>
    </main>
  );
}
