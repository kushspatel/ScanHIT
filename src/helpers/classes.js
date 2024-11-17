const getClasses = (styles) => {
    return (strings, ...values) => {
        return strings
            .flatMap((s, i) => i === 0 ? s : [values[i-1], s])
            .join('')
            .split(/\s+/g)
            .map(c => styles[c] ?? c)
            .join(' ');
    };
};

export default getClasses;
