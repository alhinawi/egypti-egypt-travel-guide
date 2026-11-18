/** Keep the active filter visible without changing catalog metadata or card size. */
export function cardVibes(vibes:readonly string[],activeVibe=''):string[]{
 const ordered=activeVibe&&vibes.includes(activeVibe)?[activeVibe,...vibes.filter(v=>v!==activeVibe)]:[...vibes];
 return ordered.slice(0,2);
}
