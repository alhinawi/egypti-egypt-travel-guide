export type ClimateMonth={month:number;high_c?:number;low_c?:number;mean_daily_max_c?:number;mean_daily_min_c?:number;precipitation_mm:number};
/** Display geometry only. Never infer absent temperatures or change recorded values. */
export function climateRange(months:ClimateMonth[]){
 if(!months.length)return null;
 const rows=months.map(m=>({month:m.month,low:m.low_c??m.mean_daily_min_c,high:m.high_c??m.mean_daily_max_c}));
 if(rows.some(r=>!Number.isInteger(r.month)||r.month<1||r.month>12||!Number.isFinite(r.low)||!Number.isFinite(r.high)||r.low!>r.high!))return null;
 const min=Math.floor(Math.min(0,...rows.map(r=>r.low!))/10)*10,max=Math.ceil(Math.max(50,...rows.map(r=>r.high!))/10)*10;
 return {min,max,rows:rows.map(r=>({month:r.month,low:r.low!,high:r.high!,start:5+90*(r.low!-min)/(max-min),end:5+90*(r.high!-min)/(max-min)}))};
}
