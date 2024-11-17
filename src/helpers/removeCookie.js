// Function to remove cookie

const removeCookie = (cookieName) => {
    document.cookie = cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export default removeCookie;
