'use client';
import{useGuide,t}from './guide-provider';
import{placePhotos,photoPath}from '@/lib/photos';
export function PlacePhoto({id,card=false}:{id:string;card?:boolean}){const{lang}=useGuide();const p=placePhotos[id];if(!p)return null;return <figure className={card?'place-photo-card':'place-photo-hero'}><img src={photoPath(p,card?420:1400)} srcSet={[420,780,1400].map(w=>photoPath(p,w)+' '+w+'w').join(', ')} sizes={card?'(max-width:600px) 90vw, (max-width:900px) 45vw, 370px':'(max-width:850px) 100vw, 800px'} alt={p.alt[lang]} loading={card?'lazy':'eager'} width={card?420:1400} height={card?280:930}/></figure>}
