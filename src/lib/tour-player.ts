/** Only use provider-supported player routes inside the modal. Other sources open full-page. */
export function tourFrameUrl(url:string,embedUrl?:string):string|undefined{
 if(embedUrl)return embedUrl;
 try{
  const parsed=new URL(url);
  if(parsed.hostname==='www.youtube.com'||parsed.hostname==='youtube.com'){
   const id=parsed.searchParams.get('v');
   if(id&&/^[A-Za-z0-9_-]{11}$/.test(id))return 'https://www.youtube-nocookie.com/embed/'+id;
  }
  if(parsed.hostname==='youtu.be'&&/^\/[A-Za-z0-9_-]{11}$/.test(parsed.pathname))return 'https://www.youtube-nocookie.com/embed'+parsed.pathname;
 }catch{}
 return undefined;
}
