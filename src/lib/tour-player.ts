/** Only use provider-supported player routes inside the modal. Other sources open full-page. */
export function tourFrameUrl(url:string,embedUrl?:string):string|undefined{
 if(embedUrl)return embedUrl;
 try{
  const parsed=new URL(url);
  const chapter=parsed.searchParams.get('t')??parsed.searchParams.get('start');
  const seconds=chapter&&/^\d+s?$/.test(chapter)?Number(chapter.replace(/s$/,'')):0;
  const start=Number.isSafeInteger(seconds)&&seconds>0?'?start='+seconds:'';
  if(parsed.hostname==='www.youtube.com'||parsed.hostname==='youtube.com'){
   const id=parsed.searchParams.get('v');
   if(id&&/^[A-Za-z0-9_-]{11}$/.test(id))return 'https://www.youtube-nocookie.com/embed/'+id+start;
  }
  if(parsed.hostname==='youtu.be'&&/^\/[A-Za-z0-9_-]{11}$/.test(parsed.pathname))return 'https://www.youtube-nocookie.com/embed'+parsed.pathname+start;
 }catch{}
 return undefined;
}
