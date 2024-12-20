// get file extension form path
// source - https://github.com/goranmoomin/extname/blob/master/index.js

const CHAR_FORWARD_SLASH = 47; /* / */
const CHAR_DOT = 46; /* . */

const extname = (path) => {
    if(typeof path !== 'string') {
        throw new TypeError(`The "path" argument must be of type string. Received type ${typeof path}`);
    }

    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    let preDotState = 0;
    for(let i = path.length - 1; i >= 0; --i) {
        let code = path.charCodeAt(i);
        if(code === CHAR_FORWARD_SLASH) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if(!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if(end === -1) {
            // We saw the first non-path separator, mark this as the end of our
            // extension
            matchedSlash = false;
            end = i + 1;
        }
        if(code === CHAR_DOT) {
            // If this is our first dot, mark it as the start of our extension
            if(startDot === -1) {
                startDot = i;
            } else if(preDotState !== 1) {
                preDotState = 1;
            }
        } else if(startDot !== -1) {
            // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
    }

    if(startDot === -1 ||
       end === -1 ||
       // We saw a non-dot character immediately before the dot
       preDotState === 0 ||
       // The (right-most) trimmed path component is exactly '..'
       (preDotState === 1 &&
        startDot === end - 1 &&
        startDot === startPart + 1)) {
        return '';
    }
    return path.slice(startDot, end);
};

export default extname;
