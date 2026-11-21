/** Horizontal intent and distance/velocity gate. Returns physical direction only. */
export function photoSwipeDirection(dx:number,dy:number,elapsed:number){if(![dx,dy,elapsed].every(Number.isFinite)||Math.abs(dx)<=Math.abs(dy)*1.3)return 0;const distance=Math.abs(dx),speed=distance/Math.max(1,elapsed);return distance>48||(distance>20&&speed>.45)?dx>0?1:-1:0}
