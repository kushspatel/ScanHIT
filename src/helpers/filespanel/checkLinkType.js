/**
 * Check url and return url type i.e. youtube
 * @param {URL} url
 */
const checkLinkType = (url) => {
    if (url.hostname.endsWith('youtube.com') || url.hostname.endsWith('youtu.be')) {
        return 'AV_LINK';
    }

    return 'WEB_LINK';
};

export default checkLinkType;
