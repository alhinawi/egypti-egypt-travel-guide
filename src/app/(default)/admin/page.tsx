import type{Metadata}from'next';import{Admin}from'@/components/admin';
export const metadata:Metadata={title:'Dashboard · لوحة التحكم',robots:{index:false,follow:false}};
export default function Page(){return <Admin/>}
