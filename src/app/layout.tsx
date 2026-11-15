import type {Metadata,Viewport} from 'next';
import './globals.css';
import './themes.css';
import './theme-ui.css';
import{themeIds,SITE_KEY,DEFAULT_THEME}from'@/lib/themes';
export const metadata: Metadata = {title: {default:'egypti | دليل مصر - Egypt travel guide',template:'%s | egypti'},description:'دليل مستقل لاكتشاف مصر، للمصري والسائح. أماكن وخطط رحلات بمصادر واضحة. An independent, source-led guide to Egypt.',robots:{index:false,follow:false}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#f5f1e9'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" data-theme={DEFAULT_THEME}><head><script dangerouslySetInnerHTML={{__html:`try{var t=localStorage.getItem('${SITE_KEY}');if(t&&${JSON.stringify(themeIds)}.indexOf(t)>-1&&!/^\\/admin\\//.test(location.pathname))document.documentElement.dataset.theme=t}catch(e){}`}}/></head><body>{children}</body></html>}
