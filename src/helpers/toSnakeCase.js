// function to convert to snake case

export default function toSnakeCase(str) {
    const result =  str.replace(/\\W+/g, ' ') // Replace non-alphanumeric characters with spaces
        .split(' ') // Split the string by space
        .map(function(word,) { // Convert the first character of each word to uppercase and the rest to lower
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(''); // Join the words back together
    return result;
}

