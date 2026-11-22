import{notFound}from'next/navigation';
import{itineraries}from'@/lib/data';
import{focusedTripDay,focusedTripDayParams}from'@/lib/focused-trip-day';
import{FocusedTripDay}from'@/components/focused-trip-day';
export const generateStaticParams=focusedTripDayParams;
export const dynamicParams=false;
export default async function Page({params}:{params:Promise<{id:string;day:string}>}){const{id,day}=await params,trip=itineraries.find(trip=>trip.id===id),view=focusedTripDay(trip,day);if(!trip||!view)notFound();return <FocusedTripDay trip={trip} number={view.number}/>}
export async function generateMetadata({params}:{params:Promise<{lang:string;id:string;day:string}>}){const{lang,id,day}=await params,trip=itineraries.find(trip=>trip.id===id),view=focusedTripDay(trip,day),language=lang==='en'?'en':'ar';return{title:view&&trip?(language==='en'?'Day ':'اليوم ')+view.number+': '+view.day.title[language]+' | '+trip.title[language]:undefined}}
