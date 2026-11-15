export interface Theme{id:string;ar:string;en:string;dark:boolean;mood:string;page:string;paper:string;ink:string;muted:string;accent:string;tint:string;line:string;sun:string;deep:string}
const T=(id:string,ar:string,en:string,dark:boolean,mood:string,c:string):Theme=>{const[page,paper,ink,muted,accent,tint,line,sun,deep]=c.split(' ');return{id,ar,en,dark,mood,page,paper,ink,muted,accent,tint,line,sun,deep}};
// Token order: page paper ink muted accent tint line sun deep. Every pair is checked by tests/themes.test.ts.
export const themes:Theme[]=[
T('ivory','عاجي','Ivory',false,'هادي ونضيف','#f5f7f6 #ffffff #102c38 #4e626b #125366 #e6f0f0 #d8e4e5 #f5c46d #0b2936'),
T('night','ليلي','Night',true,'مريح بالليل','#071c29 #102d3b #f3f6ef #aec6cd #8fdfdd #173c49 #315562 #ffcc83 #03141f'),
T('sand','رملي','Sand',false,'دافي زي الصحرا','#f6eee4 #fffbf3 #4e2c24 #705344 #ab5138 #efddc9 #dbc6b3 #ffd390 #542b25'),
T('nile','نيلي','Nile',false,'هادي زي النيل','#e9f5f4 #f9ffff #073e4d #36646c #00696e #cde9e5 #a5d3d2 #f4cf7e #044650'),
T('papyrus','بردي','Papyrus',false,'ورق قديم دافي','#f1ead2 #fbf6e4 #3b3118 #695b36 #7a5a12 #e7dcb5 #d3c593 #e8b64a #3a2d0e'),
T('lapis','لازورد','Lapis',false,'أزرق ملكي','#eaeefa #fafbff #16224d #505c89 #2a3f9e #d9e0f5 #b8c3e6 #f0c05a #0e1840'),
T('emerald','زمرد','Emerald',false,'أخضر عميق','#e8f3ec #f9fffb #10382a #466858 #0b6e4f #d2e8db #a9cfba #e9c46a #07261c'),
T('granite','جرانيت وردي','Rose granite',false,'حجر أسوان','#f4e9e6 #fffaf8 #43262a #735354 #8f3b4a #ecd6d2 #d9b9b3 #f0b98a #3b1a20'),
T('coral','مرجان','Coral',false,'دفا البحر الأحمر','#fdeee8 #fffaf7 #4a2218 #7f5344 #b4442a #f7d9cd #e8bfae #ffc982 #4a1d12'),
T('saffron','زعفران','Saffron',false,'ذهبي مشمس','#fbf0d9 #fffbef #40290a #795b2a #965a00 #f4dfae #e2c98a #f6bf4c #3d2605'),
T('karnak','كرنك','Karnak',false,'حجر المعابد','#ece6dc #faf7f1 #2f2a22 #5f564a #7b4f2a #ddd4c3 #c7bba5 #d9a441 #2b241a'),
T('oasis','واحة','Oasis',false,'أخضر فاتح','#eef2e3 #fbfdf4 #243318 #546642 #477020 #dde8c6 #bfd09f #e6c14f #1b2a10'),
T('hibiscus','كركديه','Hibiscus',false,'أحمر غامق','#f7e8ea #fffafb #3e1420 #7d4d58 #9a1f3d #f0d2d7 #dfb3bb #f2b36a #36101b'),
T('jasmine','ياسمين','Jasmine',false,'بنفسجي هادي','#f1ecf7 #fcfaff #2d1f47 #665684 #6a3fb0 #e2d8f0 #c9bbe0 #f0c56a #231638'),
T('cairo-night','ليل القاهرة','Cairo night',true,'أزرق ليلي','#0e1424 #171f36 #eef1fb #aab5d4 #9db8ff #202b4a #38466e #ffcf7a #080c18'),
T('obsidian','سبج','Obsidian',true,'أسود وذهبي','#0f0f10 #19191b #f1efea #b4b0a6 #e0c07a #26262a #3e3e44 #f0c870 #070708'),
T('red-sea','البحر الأحمر','Red Sea',true,'تركواز غامق','#0a1d22 #112f36 #eaf6f6 #9fc3c8 #5fd6c9 #173f48 #2f5f69 #ffbd69 #051216'),
T('dusk','غروب','Dusk',true,'بني دافي ليلي','#221512 #31201b #f8ece2 #cdb2a3 #f2a65a #43302a #634538 #ffc885 #150c09'),
];
export const themeIds=themes.map(t=>t.id);
export const isTheme=(id:unknown):id is string=>typeof id==='string'&&themeIds.includes(id);
export const SITE_KEY='egypti:theme',ADMIN_KEY='egypti:admin-theme';

export const DEFAULT_THEME='papyrus';
