import Link from 'next/link'
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Counter from '@/app/components/Counter'
import StoreSection from '@/app/components/StoreSection'
import BottomNav from '@/app/components/BottomNav'

function page() {
     return (
          <main className="min-h-screen flex flex-col relative container mx-auto ">
               <div className='flex items-center justify-between py-5 px-[18px]'>
                    <h2 className='text-[22px] font-bold leading-[130%] text-black-1'>My Shopping List</h2>
                    <Link href="/" className='flex items-center gap-1.5 px-3 py-[7px] text-xs font-medium text-white bg-black rounded-full'><img src="/icons/whatsapp-icon.svg" alt="" /> Share on WhatsApp</Link>
               </div>
               <div className='bg-white-2 px-[18px] py-[30px]'>
                    <div className='bg-[url(/images/landing-bg2.png)] mb-[35px] border-[3px] border-white rounded-2xl px-5 py-5 pb-[15px] bg-no-repeat bg-cover p-5'>
                         <h4 className='text-lg font-medium leading-[22px] mb-2.5 text-black-1'>Estimated savings</h4>
                         <span className='block font-bold text-black-1 text-[36px]'>€3.90  <span className='text-[28px]'>🎉</span></span>
                    </div>
                    <div className='flex items-center justify-between mb-[14px]'>
                         <h4 className='text-[21px] font-semibold text-black-1'>All Offers</h4>
                         <Link href="/" className='text-[17px] font-medium text-red-2 block'>Clear All</Link>
                    </div>
                    <TabGroup>
                         <TabList className="gradient2 p-1 rounded-full w-fit">
                              <Tab className="text-sm font-normal leading-[17px] text-black-1 inline-block cursor-pointer py-[8.5px] px-[18.5px] rounded-full data-selected:bg-white data-selected:shadow-6xl data-selected:font-medium">Supermarket</Tab>
                              <Tab className="text-sm font-normal leading-[17px] text-black-1 inline-block cursor-pointer py-[8.5px] px-[18.5px] rounded-full data-selected:bg-white data-selected:shadow-6xl data-selected:font-medium">Department</Tab>
                              <Tab className="text-sm font-normal leading-[17px] text-black-1 inline-block cursor-pointer py-[8.5px] px-[18.5px] rounded-full data-selected:bg-white data-selected:shadow-6xl data-selected:font-medium">Both</Tab>
                         </TabList>
                         <TabPanels>
                              <TabPanel>
                                   <div className='border-t border-black/[0.1]  mt-[22px]'>
                                        <div>
                                             <StoreSection
                                                  title="Esselunga"
                                                  products={[
                                                       {
                                                            image: "/icons/barilla-img.svg",
                                                            title: "Barilla Spaghetti No.5",
                                                            brand: "Barilla",
                                                            weight: "500g",
                                                            price: "€0.89",
                                                            saved: "€0.50",
                                                            hasNotes: true,
                                                            defaultOpen: true,
                                                       },
                                                       {
                                                            image: "/icons/wallet-icon.svg",
                                                            title: "Parmigiano Reggiano DOP",
                                                            brand: "Granarolo",
                                                            weight: "100g",
                                                            price: "€2.89",
                                                            saved: "€0.70",
                                                            hasNotes: true,
                                                       },
                                                       {
                                                            image: "/icons/rocher-icon.svg",
                                                            title: "Ferrero Rocher",
                                                            brand: "Ferrero",
                                                            weight: "200g",
                                                            price: "€3.49",
                                                            saved: "€1.50",
                                                            addNotes: true,
                                                       },
                                                  ]}
                                             />

                                             <StoreSection
                                                  title="Pam"
                                                  products={[
                                                       {
                                                            image: "/icons/pam-icon.svg",
                                                            title: "Mutti Tomato Passata",
                                                            brand: "Mutti",
                                                            weight: "700g",
                                                            price: "€1.19",
                                                            saved: "€0.50",
                                                            hasTextAreaNotes: true,
                                                       },
                                                  ]}
                                             />

                                             <StoreSection
                                                  title="Coop"
                                                  products={[
                                                       {
                                                            image: "/icons/juice-icon.svg",
                                                            title: "Barilla Spaghetti No.5",
                                                            brand: "Barilla",
                                                            weight: "500g",
                                                            price: "€0.89",
                                                            saved: "€0.50",
                                                            hasNotes: true,
                                                            defaultOpen: true,
                                                       },
                                                       {
                                                            image: "/icons/cecco-icon.svg",
                                                            title: "De Cecco Penne Rigate",
                                                            brand: "De Cecco",
                                                            weight: "500g",
                                                            price: "€1.19",
                                                            saved: "€1.50",
                                                            addNotes: true,
                                                       },
                                                  ]}
                                             />

                                             <StoreSection
                                                  title="Lidl"
                                                  products={[
                                                       {
                                                            image: "/icons/lidl-icon.svg",
                                                            title: "Parmalat Whole Milk",
                                                            brand: "Parmalat",
                                                            weight: "1L",
                                                            price: "€1.29",
                                                            saved: "€0.40",
                                                            hasNotes: true,
                                                       },
                                                  ]}
                                             />
                                        </div>
                                   </div>
                              </TabPanel>
                              <TabPanel>
                                   <div className='border-t border-black/[0.1]  mt-[22px]'>
                                        <div>
                                             <StoreSection
                                                  title="Pasta & Rice"
                                                  products={[
                                                       {
                                                            image: "/icons/barilla-img.svg",
                                                            title: "Barilla Spaghetti No.5",
                                                            brand: "Barilla",
                                                            weight: "500g",
                                                            price: "€0.89",
                                                            saved: "€0.50",
                                                            hasNotes: true,
                                                            defaultOpen: true,
                                                       },
                                                       {
                                                            image: "/icons/wallet-icon.svg",
                                                            title: "Parmigiano Reggiano DOP",
                                                            brand: "Granarolo",
                                                            weight: "100g",
                                                            price: "€2.89",
                                                            saved: "€0.70",
                                                            hasNotes: true,
                                                       },
                                                  ]}
                                             />

                                             <StoreSection
                                                  title="Canned"
                                                  products={[
                                                       {
                                                            image: "/icons/pam-icon.svg",
                                                            title: "Mutti Tomato Passata",
                                                            brand: "Mutti",
                                                            weight: "700g",
                                                            price: "€1.19",
                                                            saved: "Saved €0.50",
                                                            addNotes: true,
                                                       },
                                                  ]}
                                             />

                                             <StoreSection
                                                  title="Cheeses"
                                                  products={[
                                                       {
                                                            image: "/icons/wallet-icon.svg",
                                                            title: "Parmigiano Reggiano DOP",
                                                            brand: "Granarolo",
                                                            weight: "100g",
                                                            price: "€2.89",
                                                            saved: "€0.70",
                                                            addNotes: true,
                                                       },
                                                  ]}
                                             />

                                             <StoreSection
                                                  title="For Breakfast"
                                                  products={[
                                                       {
                                                            image: "/icons/lidl-icon.svg",
                                                            title: "Valfrutta Peach Juice",
                                                            weight: "1L",
                                                            price: "€1.19",
                                                            saved: "€0.40",
                                                            hasNotes: true,
                                                       },
                                                  ]}
                                             />
                                             <StoreSection
                                                  title="Sweet Snacks"
                                                  products={[
                                                       {
                                                            image: "/icons/wallet-icon.svg",
                                                            title: "Ferrero Rocher",
                                                            brand: "Ferrero",
                                                            weight: "200g",
                                                            price: "€3.49",
                                                            saved: "€1.50",
                                                            addNotes: true,
                                                       },
                                                  ]}
                                             />
                                             <StoreSection
                                                  title="Lactose-Free"
                                                  products={[
                                                       {
                                                            image: "/icons/lidl-icon.svg",
                                                            title: "Parmalat Whole Milk",
                                                            brand: "Parmalat",
                                                            weight: "1L",
                                                            price: "€1.29",
                                                            saved: "€0.40",
                                                            hasNotes: true,
                                                       },
                                                  ]}
                                             />
                                        </div>
                                   </div>
                              </TabPanel>
                              <TabPanel>
                                   <div className='border-t border-black/[0.1]  mt-[22px]'>
                                        <div>
                                             <StoreSection
                                                  title="Esselunga · Pasta and Rice"
                                                  products={[
                                                       {
                                                            image: "/icons/barilla-img.svg",
                                                            title: "Barilla Spaghetti No.5",
                                                            brand: "Barilla",
                                                            weight: "500g",
                                                            price: "€0.89",
                                                            saved: "€0.50",
                                                            hasNotes: true,
                                                            defaultOpen: true,
                                                       },
                                                  ]}
                                             />

                                             <StoreSection
                                                  title="Esselunga · Cheeses"
                                                  products={[
                                                       {
                                                            image: "/icons/wallet-icon.svg",
                                                            title: "Parmigiano Reggiano DOP",
                                                            brand: "Granarolo",
                                                            weight: "100g",
                                                            price: "€2.89",
                                                            saved: "€0.70",
                                                            addNotes: true,
                                                       },
                                                  ]}
                                             />
                                             <StoreSection
                                                  title="Pam · Canned"
                                                  products={[
                                                       {
                                                            image: "/icons/pam-icon.svg",
                                                            title: "Mutti Tomato Passata",
                                                            brand: "Mutti",
                                                            weight: "700g",
                                                            price: "€1.19",
                                                            saved: "€0.50",
                                                            hasTextAreaNotes: true,
                                                       },
                                                  ]}
                                             />

                                             <StoreSection
                                                  title="Coop · For Breakfast"
                                                  products={[
                                                       {
                                                            image: "/icons/juice-icon.svg",
                                                            title: "Barilla Spaghetti No.5",
                                                            brand: "Barilla",
                                                            weight: "500g",
                                                            price: "€0.89",
                                                            saved: "€0.50",
                                                            hasNotes: true,
                                                            defaultOpen: true,
                                                       },
                                                       {
                                                            image: "/icons/cecco-icon.svg",
                                                            title: "De Cecco Penne Rigate",
                                                            brand: "De Cecco",
                                                            weight: "500g",
                                                            price: "€1.19",
                                                            saved: "€1.50",
                                                            addNotes: true,
                                                       },
                                                  ]}
                                             />

                                             <StoreSection
                                                  title="Lidl"
                                                  products={[
                                                       {
                                                            image: "/icons/lidl-icon.svg",
                                                            title: "Parmalat Whole Milk",
                                                            brand: "Parmalat",
                                                            weight: "1L",
                                                            price: "€1.29",
                                                            saved: "€0.40",
                                                            hasNotes: true,
                                                       },
                                                  ]}
                                             />
                                        </div>
                                   </div>
                              </TabPanel>
                         </TabPanels>
                    </TabGroup>
               </div>
               <BottomNav></BottomNav>
          </main>
     )
}

export default page
