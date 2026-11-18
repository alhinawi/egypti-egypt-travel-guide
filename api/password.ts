// WebCrypto PBKDF2 on hosted Workers currently supports at most 100,000 iterations.
// A domain-separated server-held HMAC pepper also protects against a database-only leak.
export const PASSWORD_ITERATIONS=100_000;
const enc=new TextEncoder();
const hex=(v:ArrayBuffer)=>Array.from(new Uint8Array(v),x=>x.toString(16).padStart(2,'0')).join('');
export const newSalt=()=>hex(crypto.getRandomValues(new Uint8Array(32)).buffer);
export async function passwordHash(password:string,salt:string,pepper:string){
 const key=await crypto.subtle.importKey('raw',enc.encode(pepper),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 const material=await crypto.subtle.sign('HMAC',key,enc.encode('egypti:password:v1:'+password));
 const imported=await crypto.subtle.importKey('raw',material,'PBKDF2',false,['deriveBits']);
 return hex(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:enc.encode(salt),iterations:PASSWORD_ITERATIONS},imported,256));
}
export function equalHash(a:string,b:string){if(a.length!==b.length)return false;let d=0;for(let i=0;i<a.length;i++)d|=a.charCodeAt(i)^b.charCodeAt(i);return d===0}
