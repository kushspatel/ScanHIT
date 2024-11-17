// Function to read cookie
const readCookie = (name) => {

    var match = document?.cookie?.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }

};

export default readCookie;
