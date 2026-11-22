'use client';
import{placeArea,placeIndex}from'@/lib/encyclopedia';

import Link from'next/link';
import{useGuide,t}from'./guide-provider';
import{PlaceGuideAdvice}from'./place-guide-advice';
import{OperatorLeads}from'./operator-leads';
import{VisitChecklist}from'./visit-checklist';
import{PlaceCard}from'./cards';
import{places,type Place}from'@/lib/data';
export function VisitCompanion({place}:{place:Place}){const{lang}=useGuide();const others=places.filter(p=>placeIndex[p.id]?.governorate===placeIndex[place.id]?.governorate&&p.id!==place.id).slice(0,3);return <><PlaceGuideAdvice place={place}/><OperatorLeads placeId={place.id}/><VisitChecklist placeId={place.id}/>{others.length>0&&<section className="section"><div className="section-heading"><div><span className="eyebrow">{placeArea(place).name[lang]}</span><h2>{t(lang,'كمّل اكتشاف الوجهة','Keep exploring the destination')}</h2></div><Link className="inline-link" href={'/'+lang+placeArea(place).path}>{t(lang,'كل الأماكن','All places')}</Link></div><p className="muted">{t(lang,'أفكار تانية في نفس الوجهة، مش وعد إنها جنب بعض أو على مسافة مشي. راجع الطريق قبل ما تجمعهم في يوم.','More ideas in the same destination, not a claim that they are adjacent or walkable. Check the route before combining them in a day.')}</p><div className="places-grid">{others.map(p=><PlaceCard key={p.id} place={p}/>)}</div></section>}</>}
