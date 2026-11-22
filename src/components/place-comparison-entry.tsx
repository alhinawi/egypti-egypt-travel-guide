'use client';
import Link from'next/link';
import{Columns2,ArrowUpRight}from'lucide-react';
import{useGuide,t}from'./guide-provider';
import{placeComparisonChoices,placeComparisonQuery}from'@/lib/place-comparison';
export function PlaceComparisonEntry({placeId}:{placeId?:string}){const{lang}=useGuide();if(placeId&&!placeComparisonChoices.some(place=>place.id===placeId))return null;return <Link className={'place-comparison-entry tw:inline-flex tw:min-h-[46px] tw:items-center tw:gap-[9px] tw:rounded-[9px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:px-[14px] tw:py-[10px] tw:text-[12px] tw:leading-[1.8] tw:text-[var(--ink)] tw:print:hidden tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[3px]!'+(placeId?' tw:mb-[22px]':'')} href={'/'+lang+'/compare-places/'+placeComparisonQuery(placeId?[placeId]:[])}><Columns2 size={17} aria-hidden="true"/>{placeId?t(lang,'قارن المكان ده بمكان تاني','Compare this place with another'):t(lang,'قارن بين مكانين','Compare two places')}<ArrowUpRight size={15} aria-hidden="true"/></Link>}
