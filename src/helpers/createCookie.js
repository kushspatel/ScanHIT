// Function to create cookie
const createCookie = (name, value, hours) => {
    if (!hours) {
        hours = 8760;
    }

    var date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    var expires = '; expires=' + date.toGMTString();
    document.cookie = name + '=' + value + expires + '; path=/';
};

export default createCookie;
