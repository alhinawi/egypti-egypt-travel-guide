// Shared editorial containers. Keep warning copy and source metadata at each call site.
export const noticeClasses='notice tw:flex tw:items-start tw:gap-[13px] tw:rounded-[9px] tw:bg-[var(--tint)] tw:p-[20px] tw:my-[22px] tw:mx-0 tw:text-[13px] tw:text-[var(--accent)] tw:[&_svg]:mt-[5px] tw:[@media(max-width:600px)]:[&_p]:leading-[2]! tw:[@media(max-width:600px)]:p-[17px] tw:[@media(max-width:600px)]:text-[12px] tw:[@media(max-width:600px)]:gap-[11px] tw:print:[.trip-detail_&]:text-[11px] tw:print:[.trip-detail_&]:p-[12px] tw:print:[.trip-detail_&]:my-[15px]';
export const articleCopyBlockClasses='article-copy-block tw:mt-0 tw:mx-0 tw:mb-[18px]';
export const articleSectionNoteClasses='article-section-note tw:p-[12px] tw:border-s-[3px] tw:border-s-solid tw:border-s-[var(--accent)] tw:bg-[var(--tint)] tw:mb-[20px]! tw:text-[12px]';
export const travelCautionClasses=noticeClasses+' travel-caution tw:my-[20px]! tw:[&_p]:text-[12px] tw:[&_p]:mt-[6px]! tw:[&_p]:mx-0! tw:[&_p]:mb-[10px]!';
