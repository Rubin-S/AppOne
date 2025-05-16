// src/assets/images.js

import play from './play.svg';
import banner from './banner.png';
import banner_overlay from './banner_overlay.png';
import search_card from './search-card.svg';
import select_card from './select-card.svg';
import shortlist_card from './shortlist-card.svg';
import post_service from './post-service.png';
import find_service from './find-service.png';
import crossArrow from './crossArrow.svg';
import thumbnail from './video.png';
import hook from './hook.svg';

/**
 * A utility object that provides ready-to-use <img /> components for each image asset.
 * Each function returns an image element and supports standard props like alt, className, etc.
 */
export const images = {
    play: (props = {}) => (
        <img src={play} alt="play" loading="lazy" draggable={false} {...props} />
    ),
    banner,
    banner_overlay,
    search_card,
    select_card,
    shortlist_card,
    post_service,
    find_service,
    crossArrow: (props = {}) => (
        <img src={crossArrow} alt="cross arrow" loading="lazy" draggable={false} {...props} />
    ),
    thumbnail,
    hook: (props = {}) => (
        <img src={hook} alt="hook" loading="lazy" draggable={false} {...props} />
    ),
};
