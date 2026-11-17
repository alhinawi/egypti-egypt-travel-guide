import type{Lang}from'./data';
export function languageHref(path:string,next:Lang,search='',hash=''):string{return (/^\/(ar|en)(\/|$)/.test(path)?path.replace(/^\/(ar|en)/,'/'+next):'/'+next+'/')+search+hash}
